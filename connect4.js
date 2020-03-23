$.fn.connect4 = function (row = 6, cols = 7){

	console.log(row,cols,this);


	class Connect4 {

		constructor(row,col,selector)
			{
				this.tableau = [];
				this.ROWS = row;
				this.COLS = col;
				this.selector = selector;
				this.player = 0;
				this.maps;
				this.createGrid();
				this.setupEventListeners();
				this.askname1();
				this.askname2();
				let y = this.col;
				let x = this.row;
				// let name_player1 = this.player1;
				// let name_player2 = this.player2;
				// this.tournPlayer();
				self = this;
			}
			askname1()
			{
		let  player1 = prompt("Joueur numero 1 inserez votre pseudo");
			}
			askname2()
			{
		let  player2 = prompt("Joueur numero 2 inserez votre pseudo");

			}
				createGrid()
				{
				const $board = $(this.selector);
						for (let row = 0;row < this.ROWS; row++)
						{
							this.tableau[row] = [];
							const $row  =  $('<div>')
							.addClass('row');
									for (let col = 0; col < this.COLS; col++)
								{
									this.tableau[row][col] = 0;
									const $col = $('<div>')
									.addClass('col empty')
									.attr('data-col', col)
									.attr('data-row', row);
									$row.append($col);
								}
									 $board.append($row);
						}
									console.table(this.tableau);
				}
						setupEventListeners()
						{
							const  $board = $(this.selector);
							function findLastEmtyCell(col)
							{
								const cells = $(`.col[data-col='${col}']`);
								for (let i = cells.length -1 ; i >= 0; i--)
								{
									//console.log(i)
									const $cell = $(cells[i]);
								//	console.log($cell)
									//console.log(self.y);
									if ($cell.hasClass('empty'))
									{
										return $cell;
									}
								}
								return null;
							}
							$board.on('click','.col.empty',function()
							{
							//  console.table(self.tableau);
								const col = $(this).data('col');
								const row = $(this).data('row');
								const $lastEmptyCell =  findLastEmtyCell(col)
								 if (self.player === 0)
							 {
								self.tableau[row][col] = 1;
								$lastEmptyCell.addClass(`next-blue`);
								 $lastEmptyCell.removeClass(`empty`);
								// console.log($board);
							 //console.log($board);
								self.player++;
								console.log("Player 1");
								$('#currentplayer').text('Au tour du Joueur 1');
							 }
								 else if(self.player === 1)
									 {
										self.tableau[row][col] = 2;
										$lastEmptyCell.addClass(`next-red`);
										$lastEmptyCell.removeClass(`empty`);
										//console.log($board);
										console.log("Player 2");
										$('#currentplayer').text('Au tour du Joueur 2');
										self.player--;
									 }
										 else
										 {
											//console.log('fdfdf')
										 }
										 self.check(null,col,row,null,0,self.tableau)
							})
						}
						check(player,col,row,direction,length,tableau)
				{
				 // for (let row = 0;row < this.length.ROWS; row++) {
				 //   console.log(this.[row]);
				 // }
				// console.table(tableau)
				 if (player === null)
					{
						//console.log('coco')
					 player = tableau[col];

						console.log(player)
					}
						if (player != self.tableau)
						{
							//console.log('je suis rien')
							return false;
						}
							if (length === 3)
							{
								return true;
							}
									if (direction === null || direction === 'haut')
									{
										check(player,col-1,row,'haut',length+1,tableau)
									}
									if (direction === null || direction === 'gauche')
									{
										check(player,col-1,row,'gauche',length+1,tableau)
									}
									if (direction === null || direction === 'gauche')
									{
										check(player,col,row-1,'haut',length+1,tableau)
									}
									if (direction === null || direction === 'diagogauche')
									{
										check(player,col-1,row-1,'diagogauche',length+1,tableau)
									}

		}
	}

	let connect4 = new Connect4(row,cols,this);
}
