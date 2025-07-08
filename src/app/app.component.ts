import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PesquisaService, Pesquisa } from './pesquisa.service';
import { MarkdownRendererComponent } from './markdown-renderer/markdown-renderer/markdown-renderer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MarkdownRendererComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AnalisePesquisa';
  pesquisas: Pesquisa[] = [];
  loading = false;
  uploading = false;
  error = '';
  uploadSuccess = '';
  selectedFile: File | null = null;
  chatGptResponse = '';
  analysisInfo = ''; 

  constructor(private pesquisaService: PesquisaService) {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file && file.type === 'text/csv') {
      this.selectedFile = file;
      this.error = '';
      this.uploadSuccess = '';
      this.chatGptResponse = '';
    } else {
      this.error = 'Por favor, selecione um arquivo CSV válido.';
      this.selectedFile = null;
    }
  }

  clearCsvField() {
    this.selectedFile = null;
    this.error = '';
    this.uploadSuccess = '';
    this.chatGptResponse = '';
    this.analysisInfo = '';
    
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  }

  resetAnalysis() {
    this.chatGptResponse = '';
    this.analysisInfo = '';
    this.uploadSuccess = '';
    this.error = '';
    this.clearCsvField();
  }

  uploadCsv() {
    if (!this.selectedFile) {
      this.error = 'Nenhum arquivo selecionado.';
      return;
    }

    this.uploading = true;
    this.error = '';
    this.uploadSuccess = '';
    this.chatGptResponse = '';
    this.analysisInfo = '';

    this.pesquisaService.uploadCsv(this.selectedFile).subscribe({
      next: (response: any) => {
        if (response) {
          this.chatGptResponse = response;
          this.uploadSuccess = 'Arquivo processado com sucesso!';
        } else {
          this.error = response || 'Erro no processamento';
        }
        
        this.uploading = false;
        this.selectedFile = null;
      },
      error: (err) => {
        this.error = 'Erro ao enviar arquivo: ' + err.message;
        this.uploading = false;
      }
    });
  }
}
