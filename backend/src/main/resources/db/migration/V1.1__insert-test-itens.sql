--DADOS DE TESTE
INSERT INTO project (nome,descricao) VALUES
    ('ERP','Projeto empresarial'),
    ('Infra+','Projeto de redes');

INSERT INTO task (titulo,descricao,concluido,project_id) VALUES
    ('Modulo Comercial','Sprint de desenvolvimento do modulo comercial do ERP',false,1),
    ('Landing Page','Sprint de desenvolvimento da landing page',true,1),
    ('Crimpagem dos cabos','Preparação e armazenamento dos cabos RJ45',false,2),
    ('Instalação - Switch','Instalação do Switch',true,2);
