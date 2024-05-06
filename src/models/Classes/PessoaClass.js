const { connection } = require(`../../config/db`);

class Pessoa {
  constructor (nomeDaPessoa,cpf,dataNasc,genero,email,dataDeCadastro,enderecoId='') {
    this.nome = nomeDaPessoa,
    this.cpf = cpf,
    this.dataNasc = dataNasc,
    this.genero = genero,
    this.email = email,
    this.dataDeCadastro = dataDeCadastro
    this.enderecoId = enderecoId

  }

  async criarNovaPessoa() {
    try {
      const conn = await connection();
      const [rows] = await conn.query(`insert into tbl_pessoa (nome,cpf,data_nasc,genero,email,data_cad,endereco_id) values ('${this.nome}','${this.cpf}', '${this.dataNasc}','${this.genero}','${this.email}','${this.dataDeCadastro}','${this.enderecoId}')`)
      return rows;
    } catch (error) {
      throw error;
    }
  }
}