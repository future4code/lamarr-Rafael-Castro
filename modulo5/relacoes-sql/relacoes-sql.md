# Relações SQL

## Exercício 1
### a)
É uma chave única original de outra tabela. Uma chave estrangeira é adicionada a uma tabela para estabelecer uma relação entre duas tabelas.

### b)
```
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);
```
```
INSERT INTO Rating (id,comment,rate,movie_id)
VALUES (
		"1",
        "Muito bom",
        5.5,
        "002"
);
```
```
INSERT INTO Rating (id,comment,rate,movie_id)
VALUES (
		"2",
        "Um clássico",
        8,
        "003"
);
```
```
INSERT INTO Rating (id,comment,rate,movie_id)
VALUES (
		"3",
        "Obra prima",
        9,
        "004"
);
```


### c)
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`jbl-4417014-rafael-castro`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

Não é possível adicionar ou atualizar uma linha devido a falha na CONSTRAINT da chave estrangeira. A chave referenciada não existe.


### d)
```
ALTER TABLE Movie DROP rating;
```


### e)
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`jbl-4417014-rafael-castro`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

Não é possível deletar ou atualizar uma linha devido a falha na CONSTRAINT da chave estrangeira.



## Exercício 2
```
CREATE TABLE Casting (
	movie_id VARCHAR(255),
    actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
```

### a)
É uma tabela chamada Casting. Ela vai conter uma coluna chamada movie_id que será uma chave estrangeira originária da coluna id da tabela Movie. Vai conter outra coluna chamada actor_id que será uma chave estrangeira originária da coluna id da tabela Actor.


### b)
```
INSERT INTO Casting (movie_id, actor_id)
VALUES (
	"002",
    "003"
);
```
```
INSERT INTO Casting (movie_id, actor_id)
VALUES (
	"003",
    "004"
);
```
```
INSERT INTO Casting (movie_id, actor_id)
VALUES (
	"003",
    "006"
);
```
```
INSERT INTO Casting (movie_id, actor_id)
VALUES (
	"004",
    "010"
);
```
```
INSERT INTO Casting (movie_id, actor_id)
VALUES (
	"002",
	"006"
);
```
```
INSERT INTO Casting (movie_id, actor_id)
VALUES (
	"002",
    "003"
);
```

### c)
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`jbl-4417014-rafael-castro`.`Casting`, CONSTRAINT `Casting_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

Não é possível adicionar ou atualizar uma linha devido a falha na CONSTRAINT da chave estrangeira. A chave referenciada não existe.


### d)
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`jbl-4417014-rafael-castro`.`Casting`, CONSTRAINT `Casting_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

Não é possível deletar ou atualizar uma linha devido a falha na CONSTRAINT da chave estrangeira.


## Exercício 3
### a)
É um operador que especifica uma condicional a ser cumprida na união a ser gerada pelo JOIN.

### b)
```
SELECT Movie.movie_name, Movie.id, Rating.rate FROM Movie JOIN Rating ON Movie.id = Rating.movie_id;
```

















































































































































































































































































































































