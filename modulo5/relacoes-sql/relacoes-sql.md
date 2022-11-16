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

## Exercício 4
### a)
```
SELECT Movie.movie_name,Movie.id,Rating.rate,Rating.comment FROM Movie 
LEFT JOIN Rating ON Movie.id = Rating.movie_id;
```

### b)
```
SELECT Movie.id,Movie.movie_name,Casting.actor_id FROM Movie 
LEFT JOIN Casting ON Movie.id = Casting.movie_id;
```

### c)
```
SELECT AVG(Rating.rate) FROM Rating 
RIGHT JOIN Movie ON Rating.movie_id = Movie.id 
GROUP BY Movie.movie_name;
```

## Exercício 5
### a)
Cada JOIN atua unindo duas tabelas. Dessa forma é necessário um JOIN para unir a primeira tabela independente à tabela de ***relação*** e um segundo JOIN para unir a segunda tabela independente.

### b)
```
SELECT 
	m.id as Movie_ID,
    m.movie_name as Movie_Name,
    c.actor_id as Actor_ID,
    a.actor_name AS Actor_Name
FROM Movie m
LEFT JOIN Casting c ON c.movie_id = m.id
JOIN Actor a ON a.id = c.actor_id;
```

### c)
Error Code: 1054. Unknown column 'm' in 'field list'

O erro informa que não foi encontrada uma coluna chamada "m". Isso ocorreu porque a query contém um erro de digitação. Há uma vírgula em
```
m,title 
```
devendo ser um ponto "."


### d)
```
SELECT 
	Movie.movie_name, 
    Actor.actor_name,
    Rating.rate,
    Rating.comment 
FROM Actor 
JOIN Casting ON Casting.actor_id = Actor.id 
JOIN Movie ON Movie.id = Casting.movie_id 
JOIN Rating ON Rating.movie_id = Casting.movie_id;
```


## Exercício 6 
### a)
A relação é de 1:N, um filme pode receber premiações em diversas categorias num mesmo ano e uma categoria naquele ano só pode ser atribuída a um filme. Dessa forma uma tabela contendo o nome da categoria e o ano de premiação, só pode ter um filme vencedor.

### b)
```
CREATE TABLE Oscar (
	id VARCHAR(100) NOT NULL,
	category VARCHAR(100) NOT NULL,
    date VARCHAR(4) NOT NULL,
    fk_movie VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (fk_movie) REFERENCES Movie(id)
    );
```
Crie uma tabela chamada **Oscar** com uma coluna chamada **id** do tipo **varchar not null** que será a **primary key**, outra chamada **category** do tipo **varchar not null**. Uma terceira coluna chamada date do tipo **varchar not null** e uma ultima coluna do tipo **foreign key**, chamada **fk_movie** que vai estar relacionada ao campo **id** da tabela **movie**.

### c)
```
INSERT INTO Oscar VALUES ('001','best_director','2001','004');
INSERT INTO Oscar VALUES ('002','best_screenplay','2002','004');
INSERT INTO Oscar VALUES ('003','best_adaptation','2003','003');
INSERT INTO Oscar VALUES ('004','best_picture','2004','003');
INSERT INTO Oscar VALUES ('005','best_sound','2005','002');
INSERT INTO Oscar VALUES ('006','best_cinematography','2006','002');
INSERT INTO Oscar VALUES ('007','best_cinematography','2007','002');
```

### d)
```
SELECT Movie.movie_name, Oscar.category, Oscar.date FROM Movie
JOIN Oscar ON Movie.id = Oscar.fk_movie;
```
