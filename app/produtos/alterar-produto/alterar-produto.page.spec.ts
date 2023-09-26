import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlterarProdutoPage } from './alterar-produto.page';

describe('AlterarProdutoPage', () => {
  let component: AlterarProdutoPage;
  let fixture: ComponentFixture<AlterarProdutoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AlterarProdutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
