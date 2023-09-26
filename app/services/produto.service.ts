import { Injectable } from '@angular/core';
import { Produto } from './../models/Produto';
import { AngularFirestore } from '@angular/fire/compat/firestore'

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private afs: AngularFirestore) { }

  salvar(produto: Produto){

  return this.afs.collection('produtos').add({...produto});
  }

  buscarProdutos(){
    return this.afs.collection('produtos').snapshotChanges();
  }

  buscarPorId(id: string) {
    return this.afs.collection('produtos').doc(id).valueChanges();
  }

  alterar(produto: Produto) {
    return this.afs.collection('produtos').doc(produto.id).update({...produto});
  }

  deletar(id: string) {
    return this.afs.doc('produtos/' + id).delete();
  }
}
