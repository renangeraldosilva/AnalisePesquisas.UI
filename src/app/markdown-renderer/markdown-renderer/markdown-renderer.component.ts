import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { marked } from 'marked';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-markdown-renderer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './markdown-renderer.component.html',
  styleUrl: './markdown-renderer.component.scss'
})
export class MarkdownRendererComponent implements OnChanges {
  @Input() markdownContent: string = '';
  cards: { title: string; icon: string; htmlContent: SafeHtml }[] = [];

  private iconMap: { [key: string]: string } = {
    'perfil demográfico': 'user',
    'desejos e desafios': 'heart',
    'ideias e aplicações': 'bulb',
    'tópicos de interesse': 'graph',
    'resumo executivo': 'summary'
  };

  constructor(private sanitizer: DomSanitizer) {
    this.configureMarked();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['markdownContent'] && this.markdownContent) {
      this.parseMarkdownToCards();
    }
  }

  private configureMarked(): void {
    marked.setOptions({
      breaks: true,
      gfm: true,
    });
  }

  private async parseMarkdownToCards(): Promise<void> {
    try {
      const sections = this.markdownContent.split('### ').filter(s => s.trim() !== '');
      const cardData = await Promise.all(sections.map(async (section) => {
        const [titleLine, ...contentLines] = section.split('\n');
        const title = titleLine.trim();
        const content = contentLines.join('\n').trim();
        const rawHtml = await marked(content);
        const htmlContent = this.sanitizer.bypassSecurityTrustHtml(rawHtml);
        const icon = this.iconMap[title.toLowerCase()] || 'default';
        return { title, icon, htmlContent };
      }));
      this.cards = cardData;
    } catch (error) {
      console.error('Error parsing markdown to cards:', error);
      this.cards = [];
    }
  }
}