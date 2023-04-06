import TextBox from "@/components/About/TextBox";
import Header from "@/components/Header";
import React from "react";

const About = () => {
  return (
    <div className="font-montserrat h-full w-full bg-background-page text-white">
      <Header />
      <h2 className="mb-2 flex items-center justify-center pt-8 font-bold">
        MEGASENA GENERATOR
      </h2>
      <h5 className="flex items-center justify-center font-bold">
        Descrição dos algoritmos utilizados
      </h5>
      <div className="flex flex-col items-center justify-center">
        <TextBox
          title="Introdução"
          text="Em uma visão global, as loterias são consideradas 100% aleatórias, mas
          a aplicação de técnicas de ciência de dados pode nos ajudar a extrair
          insights de resultados anteriores e melhorar nossas chances de ganhar.
          Este algoritmo tem como objetivo analisar resultados anteriores da
          loteria MegaSena e gerar um novo jogo baseado em análise estatística,
          considerando o desvio padrão da frequência histórica."
        />
        <TextBox
          title="Coleta e limpeza de dados"
          text="O algoritmo começa coletando um conjunto de dados de resultados 
          anteriores da loteria MegaSena, incluindo os números vencedores e suas 
          frequências. Os dados são então limpos e organizados por frequência para 
          cada posição."
        />
        <TextBox
          title="Análise estatística"
          text="Dados estatísticos principais, como contagem, média, desvio padrão, 
          min, 25%, 50%, 75% e max são calculados. Usando o desvio padrão, um novo 
          conjunto de dados é gerado e um novo jogo é selecionado aleatoriamente a 
          partir desse conjunto de dados. Isso garante que os números gerados não sejam 
          apenas aleatórios, mas dentro de uma faixa de resultados anteriores 
          estatisticamente relevantes. Uma comparação com a curva de distribuição normal 
          (ou Gaussiana) também é realizada."
        />
      </div>
      <h5 className="mx-8 mt-8 flex items-center justify-center text-center font-bold">
        Análise aprofundada utilizando Python com Jupyter Noteboook
      </h5>
      <div className="flex flex-col items-center justify-center pb-16">
        <TextBox
          title="Média móvel e Machine Learning"
          text="Nessa análise, a média móvel é aplicada aos resultados anteriores para identificar
          quaisquer tendências ou padrões nos dados. Algoritmos de aprendizado de máquina 
          baseado em LSTM (Long Short-Term Memory) e ARIMA são utilizados para analisar os dados 
          e prever o próximo jogo, tratando o algoritmo como uma série temporal. O algoritmo é
          projetado para considerar a ordem dos jogos, garantindo que as previsões façam sentido.
          Por conta do alto poder de processamento exigido, esses cálculos mais avançados 
          foram mantidos em código Python no Jupyter Notebook, que pode ser encontrado aqui:"
          linkText="Ir para o Jupyter Notebook"
          linkUrl="https://github.com/leonardoacr/megasena-generator/tree/main/notebook"
        />
        <TextBox
          title="Conclusão"
          text="O principal objetivo desse algoritmo é aplicar técnicas de ciência de dados e 
          discutir métodos estatísticos que podem ser usados para extrair insights de resultados 
          anteriores da loteria da Mega Sena. Destina-se apenas para fins de aprendizado e prática e 
          não deve ser usado como garantia de ganhar na loteria. Apesar da rede neural ter tido
          grande eficiência em prever e aprender o comportamento do jogos para a média móvel e capturar 
          tendência de novos jogos, ressalta-se que ao retornar aos valores normalizados, 
          o desvio padrão e picos aleatórios que acontecem aleatoriamente deve ser considerados. 
          Dessa forma, mesmo se a tendência é acertada, o resultado final ainda é tão aleatório quanto um
          humano jogando, pois o resultado é um só."
        />
      </div>
    </div>
  );
};

export default About;
