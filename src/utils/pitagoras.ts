 export function calcPitagoras  (catetoA:string, catetoB:string, hipotenusa:string){
    const ladosEmBranco = [catetoA, catetoB, hipotenusa].filter(
      (lado) => lado === "",
    ).length;

    if (ladosEmBranco !== 1) {
      alert(
        ladosEmBranco === 3
          ? 'Informe dois lados para calcular o terceiro.'
          : 'Deixe em branco o lado que deseja calcular.',
      );
      return;
    }

    const ladoA = Number(catetoA);
    const ladoB = Number(catetoB);
    const ladoC = Number(hipotenusa );
    let resultado: number;
    let mensagem: string;

    if (hipotenusa === "") {
      resultado = Math.sqrt(ladoA ** 2 + ladoB ** 2);
      mensagem = `A hipotenusa mede ${resultado.toFixed(4)}.`;
    } else if (catetoA === "") {
      const diferenca = ladoC ** 2 - ladoB ** 2;
      if (diferenca < 0) {
        alert('A hipotenusa deve ser maior que o cateto B.');
        return;
      }
      resultado = Math.sqrt(diferenca);
      mensagem = `O cateto A mede ${resultado.toFixed(4)}.`;
    } else if (catetoB === "") {
      const diferenca = ladoC ** 2 - ladoA ** 2;
      if (diferenca < 0) {
        alert('A hipotenusa deve ser maior que o cateto A.');
        return;
      }
      resultado = Math.sqrt(diferenca);
      mensagem = `O cateto B mede ${resultado.toFixed(4)}.`;
    } else {
      alert('Confira os valores informados.');
      return;
    }

    alert(mensagem);
  };