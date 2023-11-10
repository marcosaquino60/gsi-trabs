<!DOCTYPE html>
<html>
<head>
    <title>Aprendendo PHP</title>
</head>
<body>
    <form action="" method="POST">
        <label for="usuario">Usuário:</label>
        <input type="text" id="usuario" name="usuario"/><br><br>
        <label for="senha">Senha</label>
        <input type="password" id="senha" name="senha"/><br><br>
        <input type="submit" value="Entrar"/>
    </form>


<?php
    session_start();
    if(isset($_POST["usuario"]) && isset($_POST["senha"])) {
        require_once "conexao.php";
        require_once "UsuarioEntidade.php";
        
        $conn = new Conexao();
        var_dump($conn->conexao);

        $sql = "SELECT * FROM usuarios WHERE cpf = ? and senha = ?";
        $stmt = $conn->conexao->prepare( $sql );

        $stmt->bindParam(1, $_POST["usuario"]);
        $stmt->bindParam(2, $_POST["senha"]);

        $resultado = $stmt->execute();

        if($stmt->rowCount() == 1) {

            $usuario = new UsuarioEntidade();
            
            while ($rs = $stmt->fetch(PDO::FETCH_OBJ)) {
                $usuario->setCpf($rs->cpf);
                $usuario->setNome($rs->nome);
            }

            $_SESSION["login"] = "1";
            $_SESSION["usuario"] = $usuario;
            header("Location: home.php");
        }
        else {
            echo "Usuário ou senha inválidos";
        }
    }
?>
</body>
</html>