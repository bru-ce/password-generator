$(function () {

	$(".alert").hide();



	$("button[type='button']").click(function(){



		var tamanho = $("[name='tamanho']").val(); /*	Número de Caracteres da Senha */
		if($("[name='tamanho']").val() <= 0){
			/*	Exibindo o Aviso caso a quantidade seja menor que 0 */
			$(".alert").fadeIn('slow').addClass('alert-danger').removeClass('alert-info').html('<strong>Atenção!</strong> Quantidade de caracteres em branco.');
			return false
		} else {
			$(".alert").fadeIn('slow').addClass('alert-info').removeClass('alert-danger').html('<strong>Sucesso!</strong> Muito bem, agora você já tem uma Super Senha.');
		}

		var pass = "";




		function password_generator(tamanho) {
			for (var i= 1; i < tamanho; i++){
				console.log(i);
				pass += getRandomChar();
			}

			pass += getRandomChar();

			$("[name='senha']").val(pass); /*	Atribuir a senha ao campo de Senha */




		}
		function getRandomChar() {
/*
* matriz contendo em cada linha indices (inicial e final) da tabela ASCII para retornar alguns caracteres.
* [48, 57] = numeros;
* [64, 90] = "@" mais letras maiusculas;
* [97, 122] = letras minusculas;
*/
var ascii = [[48,57],[64,90],[97,122]];
var i = Math.floor(Math.random()*ascii.length);
return String.fromCharCode(Math.floor(Math.random()*(ascii[i][1]-ascii[i][0]))+ascii[i][0]);


}
password_generator(tamanho);


});





});

