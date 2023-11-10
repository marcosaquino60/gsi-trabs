<!DOCTYPE html>
<html>
<head>
    <title>Lista de Usuários</title>
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.11.5/css/dataTables.bootstrap5.min.css">
</head>
<body>
    <div class="container">
        <h1>Lista de Usuários</h1>
        <table id="usuariosTable" class="table table-striped">
            <thead>
                <tr>
                    <th>CPF</th>
                    <th>Nome</th>
                </tr>
            </thead>
            <tbody>
                <!-- Os dados da tabela serão preenchidos aqui pelo DataTables -->
            </tbody>
        </table>
        <button id="limparTabela" class="btn btn-primary">Limpar Tabela</button>
    </div>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.datatables.net/1.11.5/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/1.11.5/js/dataTables.bootstrap5.min.js"></script>
    <script>
        $(document).ready(function() {
            var table = $('#usuariosTable').DataTable({
                "ajax": "buscar_usuarios.php", // Arquivo PHP para buscar dados do banco de dados
                "columns": [
                    { "data": "cpf" },
                    { "data": "nome" }
                ]
            });

            // Botão para limpar a tabela
            $('#limparTabela').on('click', function() {
                table.clear().draw();
            });
        });
    </script>
</body>
</html>