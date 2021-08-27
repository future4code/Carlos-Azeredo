# Carlos Alberto Dutra Azeredo 
## _SEMANA 16 AULA 46_

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

```
Exercício 1

a) "ALTER TABLE Actor DROP COLUMN salary;" - Esse comando remove a coluna "salary" da tabela Actor.


b) "ALTER TABLE Actor CHANGE gender sex VARCHAR(6);" - Esse comando irá renomear e mudar a definição da coluna.

c) "ALTER TABLE Actor CHANGE gender gender VARCHAR(255);" - Esse comando irá apenas mudar a definição de quantidade de caracteres da coluna "gender".

d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```
------------------------------------------------------------------------------------------------------------------------------------------------

Exercício 2
```
a) UPDATE Actor
SET name = "Amanda Montengro",
birth_date = "1930-07-12"
WHERE id = "003";
```

```
b) UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE NAME = "JULIANA PAES";
```
```
c) UPDATE Actor
SET name = "Alessandra Negrini", salary = 70000, birth_date = "1970-08-29", gender = "female"
WHERE id = "005";
```
```
d) Realizei um teste mudando o ID para uma string, o SQL permite a mudança porém após essa alteração o dado desaparece da tabela, acredito que seja por ele ter recebido um tipo de informação que não era a esperada. Após refazer a operação inserindo um dado correto ele volta a aparecer.
```
------------------------------------------------------------------------------------------------------------------------------------------------

Exercício 3
```
a) DELETE FROM Actor WHERE name = "Fernanda Montenegro"
```
```
b) DELETE FROM Actor WHERE gender = "male" AND salary > 1000000
```
------------------------------------------------------------------------------------------------------------------------------------------------

Exercício 4
```
a) SELECT MAX(salary) FROM Actor;

b) SELECT MIN(salary) FROM Actor WHERE gender = "female";

c) SELECT COUNT(*) FROM Actor WHERE gender = "female";

d) SELECT SUM(salary) FROM Actor;
```
------------------------------------------------------------------------------------------------------------------------------------------------

Exercício 5
```
a) A query "SELECT COUNT(*), gender FROM Actor GROUP BY gender" faz a contagem de todos os elementos que possuem um gender e os separa por tipo (male ou female).
```
```
b) SELECT id, name
FROM Actor
ORDER BY name DESC;
```
```
c) SELECT * FROM Actor
ORDER BY salary DESC;
```
```
d) SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
```
```
e) SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
```
------------------------------------------------------------------------------------------------------------------------------------------------

Exercício 6
```
a) ALTER TABLE Movies ADD playing_limit_date DATE;
```

```
b) ALTER TABLE Movies CHANGE rate rate FLOAT;
```
```
c) UPDATE Movies SET playing_limit_date = "2021-08-17" WHERE id = "003"; e "UPDATE Movies SET playing_limit_date = "2021-07-10" WHERE id = "001";"
```
```
d) A query seria "UPDATE Movies SET sinopse = "Nova sinopse" WHERE id = "002"". O SQL retorna sucesso porém com a mensagem de que nenhuma linha foi afetada pois não existe linha que tenha a mesma referência do id que foi passado na query.

```

------------------------------------------------------------------------------------------------------------------------------------------------

Exercício 7
```
a) SELECT COUNT(*) FROM Movies WHERE rate > 7.5;

b) SELECT AVG(rate) FROM Movies;

c) SELECT COUNT(*) FROM Movies WHERE playing_limit_date > CURDATE();

d) SELECT COUNT(*) FROM Movies WHERE release_date > CURDATE();

e) SELECT MAX(rate) FROM Movies;

f) SELECT MIN(rate) FROM Movies;
```
------------------------------------------------------------------------------------------------------------------------------------------------

Exercício 8
```
a) SELECT * FROM Movies ORDER BY name ASC;

b) SELECT * FROM Movies ORDER BY name DESC LIMIT 5;

c) SELECT * FROM Movies WHERE release_date < CURDATE() ORDER BY release_date DESC LIMIT 3; 

d) SELECT * FROM Movies ORDER BY rate DESC LIMIT 3;
```
------------------------------------------------------------------------------------------------------------------------------------------------

                                                QUERIES
```
SET SQL_SAFE_UPDATES = 0;

ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

UPDATE Actor
SET name = "Amanda Montengro",
birth_date = "1930-07-12"
WHERE id = "003";

UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE NAME = "JULIANA PAES";

UPDATE Actor
SET name = "Alessandra Negrini", salary = 70000, birth_date = "1970-08-29", gender = "female"
WHERE id = "005";

UPDATE Actor
SET id = "errado"
WHERE name = "Alessandra Negrini";

UPDATE Actor
SET id = "005"
WHERE name = "Alessandra Negrini";

DELETE FROM Actor WHERE name = "Fernanda Montenegro";

DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;

SELECT Count(*) FROM Actor;

SELECT COUNT(*) FROM Actor WHERE gender = "female";

SELECT AVG(salary) FROM Actor;

SELECT MAX(salary) FROM Actor;

SELECT * FROM Actor LIMIT 3;

SELECT * FROM Actor ORDER BY name ASC;

SELECT * FROM Actor ORDER BY name ASC LIMIT 4;

SELECT * FROM Actor
WHERE gender = 'female'
ORDER BY name ASC
LIMIT 4;

SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

SELECT id, name
FROM Actor
ORDER BY name DESC;

SELECT * FROM Actor
ORDER BY salary DESC;

SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

ALTER TABLE Movies ADD playing_limit_date DATE;

DELETE FROM Movies WHERE id = "002";

UPDATE Movies SET sinopse = "Nova sinopse" WHERE id = "002";

SELECT COUNT(*) FROM Movies WHERE rate > 7.5;

SELECT AVG(rate) FROM Movies;

SELECT COUNT(*) FROM Movies WHERE playing_limit_date > CURDATE();

SELECT MAX(rate) FROM Movies;

SELECT MIN(rate) FROM Movies;

SELECT * FROM Movies ORDER BY name ASC;

SELECT * FROM Movies ORDER BY name DESC LIMIT 5;

SELECT * FROM Movies WHERE release_date < CURDATE() ORDER BY release_date DESC LIMIT 3; 

SELECT * FROM Movies ORDER BY rate DESC LIMIT 3;                                                

```





















```
