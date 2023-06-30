# Сценарий игры <!-- omit in toc -->

Игрок управляет мячом в нижней части экрана, который двигается влево и вправо, а так же может прыгать через препятствия.
Цель игры набрать как можно больше очков, проходя препятствия и собирая порталы. Игра имеет постепенно повышающий уровень сложности.
Имеется несколько уровней, которые сменяют друг друга после прохождения нового уровня.
Разница в уровнях это расположение и препятствий.  В игре присутствуют уровни где игроку нужно проходить с ограничением по временен.
Мяч имеет 3 жизни. Игрок при столкновении с ловушкой теряет 1 и 100 очков. Так же в игре есть секретные места, где ему возвращают 1 жизнь.
За каждый пройденный портал игрок получает 100 очков. В игре может быть до 5 порталов.
Каждый портал представляет собой рамку пожий на обруч. Препятствие имеет размер поменьше размера шара.

Существует несколько видов жуков, например:

|      Препятствия и порталы       | Описание                                                                                                                                                |
| :------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![bal](scenario/bal.png)         | Мяч, в основном передвигается влево или в право, может прыгать. При падении не теряет здоровье.                                                         |
| ![healt](scenario/healt.png)     | Жизни игрока. Может уменьшаться или прибавляться.                                                                                                       |
| ![thorn](scenario/thorn.png)     | Препятствие (шип). При соприкосновении становится красным.                                                                                              |
| ![portal](scenario/portal.png)   | При прохождение через портал игрок получает очки, сам портал становится серым                                                                           |

_TODO:_

- [ ] Добавить врагов с особенностями поведения.
- [ ] Нарисовать/найти другие изображения врагов с анимацией.

_Хотелки:_

- [ ] Реализовать врага при который может двигаться по вертикали.
- [ ] Реализовать подушку при соприкосновении мог увеличивать и уменьшать размер шара.
- [ ] Реализовать подушку при соприкосновении мог увеличивать и уменьшать вес шара.
- [ ] Реализовать пружину при соприкосновении мог увеличивать расстояние от пола.