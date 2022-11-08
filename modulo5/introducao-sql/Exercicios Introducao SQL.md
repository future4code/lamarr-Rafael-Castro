## Exercício 1

### a) 
***CREATE TABLE ACTOR*** - Cria uma tabela com o nome de "Actor"

***VARCHAR(255)*** - Define que o tipo de dado a ser recebido é uma string de no máximo 255 caractéres.

***PRIMARY KEY*** - Define que esse campo será a chave primária da tabela.

***NOT NULL*** - Define que aquele campo não pode ser deixado em branco durante o preenchimento.

***DATE*** - Define que o tipo de dado a ser recebido é um uma data.


### b)
***SHOW DATABASES*** - Mostra uma lista com os nomes de todos os esquemas ou banco de dados criados.

***SHOW TABLES*** - Mostra uma lista com os nomes de todas as tabelas criadas.


### c)
***DESCRIBE*** - Mostra todos os campos criados na tabela, assim como as características desses campos.


## Exercício 2

### a)
```
insert into Actor (id, actor_name, salary, birth_date, gender) 
values("002", "Gloria Pires", 1200000, "1963-08-23", "female");
```

### b)
Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'

Erro de entrada duplicada. Uma nova entrada não pode ser feita usando o mesmo id, pois ele é um primary key e devido a isso precisa ser único.


### c)
Error Code: 1136. Column count doesn't match value count at row 1

A quantidade de colunas não bate com a quantidade de valores informados.

```
INSERT INTO Actor (id, actor_name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```


### d)
Error Code: 1364. Field 'actor_name' doesn't have a default value

Não foi atribuido valor para o campo 'actor_name' e esse campo é not null.

```
INSERT INTO Actor (id, actor_name, salary, birth_date, gender)
VALUES(
  "004",
  "Maria Silva",
  400000,
  "1949-04-18", 
  "male"
);
```


### e)
Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1

O valor informado para o campo birth_date não contém aspas, devido a isso os valores estão sofrendo dedução matemática, resultando em 1950.

```
INSERT INTO Actor (id, actor_name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```


### f)
```
INSERT INTO Actor (id, actor_name, salary, birth_date, gender)
VALUES(
  "006", 
  "Rita Cassia",
  10.00,
  "1980-01-14", 
  "female"
);
```

```
INSERT INTO Actor (id, actor_name, salary, birth_date, gender)
VALUES(
  "007", 
  "Chuck Norris",
  10000000.00,
  "0001-01-01", 
  "male"
);
```


## Exercício 3

### a)
```
select * from Actor where gender='female';
```


### b)
```
select salary from Actor where actor_name='Tony Ramos';
```


### c)
```
select * from Actor where gender = "invalid";
```

Nenhum dado é retornado, pois nenhuma das entradas contém "invalid" no campo gender


### d)
```
select id, actor_name, salary from Actor where salary <=500;
```


### e)
Error Code: 1054. Unknown column 'nome' in 'field list'

O nome do campo foi fornecido errado.

```
SELECT id, actor_name from Actor WHERE id = "002";
```



## Exercicio 4

### a)
A primeira condição fica entre parenteses, indicando que o nome precisa começar com A ou J. O resultado que passar nessa condição deve também passa na condição de ter o salário maior do que 300000.


### b)
```
select * from Actor where (actor_name not like 'A%') and salary > 350000;
```


### c)
```
select * from Actor where actor_name like '%g%' or actor_name like '%G%';
```


### d)
```
select * from Actor where (actor_name like '%a%' or actor_name like '%A%') and salary between 350000 and 900000;
```



## Exercicio 5

### a)
```
create table Movies (
	id varchar(255) primary key,
    movie_name varchar(255) not null,
    synopsis text not null,
    release_date date not null,
    rating int not null
);
```


### b)
```
insert into Movies (id, movie_name, synopsis, release_date, rating)
values(
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina
    do casamento. Um dia eles são atingidos por um fenômeno inexplicável 
    e trocam de corpos.",
    "2006-01-06",
    7
);
```


### c)
```
insert into Movies (id, movie_name, synopsis, release_date, rating)
values(
	"002",
    "Doce de Mãe",
    "Doca Picucha, uma animada senhora de 85 anos, sempre causa grandes
    confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta
    depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai
    se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
);
```


### d)
```
insert into Movies (id, movie_name, synopsis, release_date, rating)
values(
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho,
    que só quer saber de farras e jogatina nas boates. A vida de abusos acaba
    por acarretar sua morte precoce.",
    "2017-11-02",
    8
);
```


### e)
```
insert into Movies (id, movie_name, synopsis, release_date, rating)
values(
	"004",
    "O Auto da Compadecida",
    "João Grilo e Chicó são os amigos inseparáveis que protagonizarão 
    a história vivida no sertão nordestino. Assolados pela fome, pela 
    aridez, pela seca, pela violência e pela pobreza, tentando sobreviver 
    num ambiente hostil e miserável, os dois amigos usam da inteligência e 
    da esperteza para contornarem os problemas.",
    "2000-09-10",
    9
);
```



## Exercício 6

### a)
```
select id, movie_name, rating from Movies where id="004";
```

### b)
```
select * from Movies where movie_name = "Doce de mãe";
```

### c)
```
select id, movie_name, synopsis from Movies where rating >= 7;
```



## Exercício 7

### a)
```
select * from Movies where movie_name like "%vida%";
```


### b)
```
select * from Movies where movie_name like "%vida%" or synopsis like "%vida%";
```


### c)
```
select * from Movies where release_date < "2022-10-08";
```

### d)
```
select * from Movies where release_date < "2022-10-08" 
and (movie_name like "%eu%" or synopsis like "%eu%")
and rating > 7;
```



















































































































































































































































































































































































































































































































