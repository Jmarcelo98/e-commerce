package model.dao.implementacao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import model.bancoDados.ConexaoBD;
import model.dao.CamisaDao;
import model.entities.Camisa;

public class CamisaDaoJDBC implements CamisaDao {

	Connection conexao = null;
	PreparedStatement st = null;

	@Override
	public void inserir(Camisa camisa) {

		try {

			conexao = ConexaoBD.abriConexao();

			st = conexao.prepareStatement("");

		} catch (SQLException e) {
			e.getMessage();
		}

	}

}
