import {question} from "readline-sync"

function main(){
    const duração_curso = Number(question("Digite a duração do curso(Em quantidade de semestres): "))
    let valor_mensalidade = Number(question("Digite o valor da mensalidade: "))
    const valor_financiado = (duração_curso * 6) * valor_mensalidade
    let salario_aluno = Number(question("Digite o seu salario: "))
    let qtd_salarios_minimos = (salario_aluno / 1412)
    let taxa_selic = analisar_taxa(salario_minimo)
    let numero_de_familares = Number(question("DIgite a quantidade de familiares: "))
    let renda_familiar = Number(question("Digite o valor da sua renda familiar: "))
    let analisar_habilitado = analisar_renda_familiar(renda_familiar, numero_de_familares)
    let ano_de_inicio = Number(question("DIgite o ano de inicio: "))
    let semestre_inico = Number(question("Digite qual semetre foi iniciado o curso: "))
    let pago_durante_curso = calcular_durante_curso(duração_curso, taxa_selic, valor_mensalidade)
    let pago_pos_curso = (150 * 18)
    let valor_total_a_pagar = calcular_total_a_pagar(pago_durante_curso + pago_pos_curso)
    let parcela = Number(question("Digite em quantas vezes deseja parcelar: "))

    let resposta = `
    =====================================
    Habilitação: ${analisar_habilitado}
    Valor a ser financiado: ${valor_financiado}
    Valor Total a pagar: ${valor_total_a_pagar}
    Valor a ser pago durante curso: ${pago_durante_curso}
    Valor a ser pago durante a carencia: ${pago_pos_curso}
    Valor da parcela do financiamento: ${(valor_financiado / parcela)}
    Renda minima inicial do aluno: ${salario_aluno}
    Ano Inicial: ${ano_de_inicio}
    Semestre Inicial: ${semestre_inico}
    Ano da Conclusão de Pagamento: 
    =======================================
    `
    }

function analisar_taxa(salario_minimo){
    if (salario_minimo < 1.5){
        return 0.10
    }
    else if (salario_minimo < 2){
        return 0.15
    }
    else if (salario_minimo < 2.5){
        return 0.20
    }
    else if (salario_minimo > 2.5){
        return 0.25
    }
}

function analisar_renda_familiar(valor_total,qtd_familiareas){
    let qtd_salarios_minimos_por_pessoa = (valor_total / 1412) / (qtd_familiareas)

    if(qtd_salarios_minimos_por_pessoa > 3){
        return "REPROVADO"
    }
    else{
        return "APROVADO"
    }
}
main()
