# stormQuestions

<div>
    <h3><a id="user-content-questão-i" class="anchor" aria-hidden="true" href="#questão-i"><svg
                class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16"
                aria-hidden="true">
                <path fill-rule="evenodd"
                    d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
            </svg></a>QUESTÃO I</h3>
    <p>Dado um array de números inteiros, retorne os índices dos
        dois números de forma que eles se somem a um alvo
        específico.</p>
    <p>Você pode assumir que cada entrada teria exatamente uma
        solução, e você não pode usar o mesmo elemento duas
        vezes.
        Um número é considerado feliz, se em algum ponto a soma de seus dígitos ao quadrado equivale a 1.</p>
    <pre><code>EXEMPLO:

Dado nums = [2, 7, 11, 15], alvo = 9,
Como nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
</code></pre>
    <h3><a id="user-content-questão-ii" class="anchor" aria-hidden="true" href="#questão-ii"><svg
                class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16"
                aria-hidden="true">
                <path fill-rule="evenodd"
                    d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
            </svg></a>QUESTÃO II</h3>
    <p>Um bracket é considerado qualquer um dos seguintes caracteres: (, ), {, }, [ ou ].</p>
    <p>Dois brackets são considerados um par combinado se o bracket de abertura (isto
        é, (, [ou {) ocorre à esquerda de um bracket de fechamento (ou seja,),] ou} do
        mesmo tipo exato. Existem três tipos de pares de brackets : [ ], { } e ( ).</p>
    <p>Um par de brackets correspondente não é balanceado se o de abertura e o de
        fechamento não corresponderem entre si. Por exemplo, { [ ( ] ) } não é balanceado
        porque o conteúdo entre {e} não é balanceado. O primeiro bracket inclui o de
        abertura, (, e o segundo inclui um bracket de fechamento desbalanceado,].</p>
    <p>Dado sequencias de caracteres, determine se cada sequência de brackets é
        balanceada. Se uma string estiver balanceada, retorne SIM. Caso contrário, retorne
        NAO.</p>
    <pre><code>EXEMPLO:

{[()]} SIM
{[(])} NAO
{{[[(())]]}} SIM
</code></pre>
    <h3><a id="user-content-questão-iii" class="anchor" aria-hidden="true" href="#questão-iii"><svg
                class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16"
                aria-hidden="true">
                <path fill-rule="evenodd"
                    d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
            </svg></a>QUESTÃO III</h3>
    <p>Digamos que você tenha um array para o qual o elemento i
        é o preço de uma determinada ação no dia i.</p>
    <p>Se você tivesse permissão para concluir no máximo uma
        transação (ou seja, comprar uma e vender uma ação), crie
        um algoritmo para encontrar o lucro máximo.</p>
    <pre><code>EXEMPLO:

Input: [7,1,5,3,6,4]
Output: 5 (Comprou no dia 2 (preço igual a 1) e vendeu no dia 5 (preço igual a 6), lucro foi de 6 – 1 = 5

Input: [7,6,4,3,1]
Output: 0 (Nesse caso nenhuma transação deve ser feita, lucro máximo igual a 0)
</code></pre>
    <h3><a id="user-content-questão-iv" class="anchor" aria-hidden="true" href="#questão-iv"><svg
                class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16"
                aria-hidden="true">
                <path fill-rule="evenodd"
                    d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
            </svg></a>QUESTÃO IV</h3>
    <p>Dados n inteiros não negativos representando um mapa de
        elevação onde a largura de cada barra é 1, calcule quanta
        água é capaz de reter após a chuva.</p>
    <pre><code>EXEMPLO:

Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
</code></pre>
    <h3><a id="user-content-tecnologias-utilizadas" class="anchor" aria-hidden="true"
            href="#tecnologias-utilizadas"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1"
                width="16" height="16" aria-hidden="true">
                <path fill-rule="evenodd"
                    d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
            </svg></a>Tecnologias Utilizadas:</h3>
    <ul>
        <li>JavaScript ES6</li>
    </ul>
</div>
