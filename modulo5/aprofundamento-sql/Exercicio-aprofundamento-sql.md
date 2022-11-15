# Exercícios - Aprofundamento SQL

## Exercício 1

### a)
Exclui a coluna **salary** da tabela **Actor**.

### b)
Na tabela Actor, altera a coluna **gender**, renomeando-a para **sex**, do tipo **varchar** com até 6 caractéres.

### c)
Na tabela Actor, altera a coluna **gender** para ser do mesmo tipo **varchar**, mas com até 255 caractéres.

### d)
´´´
ALTER TABLE Actor CHANGE gender gender VARCHAR(100)
´´´


## Exercício 2

### a)
´´´
UPDATE Actor SET actor_name = "Selton Melo", birth_date = "1980-05-01" WHERE id = "003";
´´´

### b)
´´´
UPDATE Actor SET actor_name = "JULIANA PAES" WHERE actor_name = "Juliana Paes";
´´´
´´´
UPDATE Actor SET actor_name = "Juliana Paes" WHERE actor_name = "JULIANA PAES";
´´´

### c)
```
UPDATE Actor SET actor_name = "Selton Melo", salary = 333333, birth_date = "2000-04-09", gender = "male" WHERE id = "005";
```


### d)
0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0

O erro informa que nenhuma linha foi encotrada com os parametros informados e, devido a isso, nenhuma linha foi alterada.



## Exercício 3

### a)
´´´
DELETE FROM Actor WHERE actor_name = "Fernanda Montenegro";
´´´

### b)
```
DELETE FROM Actor WHERE salary > 1000000 AND genre = "male";
```


## Exercício 4

### a)
```
SELECT MAX(salary) FROM Actor;
```

### b)
```
SELECT MIN(salary) FROM Actor;
```

### c)
```
SELECT COUNT(*) FROM Actor;
```

### d)
```
SELECT SUM(salary) FROM Actor;
```


## Exercício 5

### a)
A query pede a exibição da contagem total de todos os items da tabela, ao lado pede o **gender**, agrupando os resultados pelo **gender**.

### b)
```
SELECT id, actor_name FROM Actor ORDER BY actor_name DESC;
```

### c)
```
SELECT * from Actor ORDER BY salary;
```

### d)
```
SELECT * from Actor ORDER BY salary DESC LIMIT 3;
```

### e)
```
SELECT gender, AVG(salary) FROM Actor GROUP BY gender;
```


## Exercício 6

### a)
```
ALTER TABLE Movie ADD playing_limit_date date;
```


### b)
```
ALTER TABLE Movie CHANGE COLUMN avaliacao rating FLOAT NOT NULL;
```


### c)
```
UPDATE Movie SET playing_limit_date = "2022-12-20" WHERE id = "001";
```
```
UPDATE Movie SET playing_limit_date = "2022-10-01" WHERE id = "002";
```


### d)
```
DELETE FROM Movie WHERE id = "001";
```
```
UPDATE Movie SET synopsis = "test" WHERE id = "001";
```
O erro informa que nenhuma linha foi encotrada com o parametro informado e, devido a isso, nenhuma linha foi alterada.


## Exercício 7

### a)
```
SELECT COUNT(*) FROM Movie WHERE rating > 7.5;
```

### b)
```
SELECT AVG(rating) FROM Movie;
```

### c)
```
SELECT COUNT(*) FROM Movie WHERE playing_limit_date < NOW();
```

### d)
```
SELECT COUNT(*) FROM Movie WHERE release_date > CURDATE();
```


### e)
```
SELECT MAX(rating) FROM Movie;
```

### F)
```
SELECT MIN(rating) FROM Movie;
```


## Exercício 8

### a)
```
SELECT * FROM Movie ORDER BY movie_name;
```

### b)
```
SELECT * FROM Movie ORDER BY movie_name DESC LIMIT 5;
```

### c)
```
SELECT * FROM Movie ORDER BY release_date DESC LIMIT 3;
```

### d)
```
SELECT * FROM Movie ORDER BY rating DESC LIMIT 3;
```