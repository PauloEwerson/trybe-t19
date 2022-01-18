function createStatesOfBrazil() {
  const statesOptions = [
    'AC: Acre',
    'AL: Alagoas',
    'AP: Amapá',
    'AM: Amazonas',
    'BA: Bahia',
    'CE: Ceará',
    'DF: Distrito Federal',
    'ES: Espírito Santo',
    'GO: Goías',
    'MA: Maranhão',
    'MT: Mato Grosso',
    'MS: Mato Grosso do Sul',
    'MG: Minas Gerais',
    'PA: Pará',
    'PB: Paraíba',
    'PR: Paraná',
    'PE: Pernambuco',
    'PI: Piauí',
    'RJ: Rio de Janeiro',
    'RN: Rio Grande do Norte',
    'RS: Rio Grande do Sul',
    'RO: Rondônia',
    'RR: Roraíma',
    'SC: Santa Catarina',
    'SP: São Paulo',
    'SE: Sergipe',
    'TO: Tocantins'
  ]
  const states = document.querySelector('#state');

  for (let index = 0; index < statesOptions.length; index += 1) {
    const state = statesOptions[index];
    const stateListItem = document.createElement('option');
    stateListItem.innerHTML = state;

    states.appendChild(stateListItem);
  };
};

createStatesOfBrazil();