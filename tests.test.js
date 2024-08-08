const {validatePassword, confirmAge, onSubmit, confirmSenha}= require('./tests')

it('testa se a senha ta cumprindo a regra',()=>{
    expect(validatePassword('pri*')).toBe(true)
})
it('testa se não está na regra',()=>{
    expect(validatePassword('pri')).toBe(false)
})
it('testa se as senhas não são iguais',()=>{
    expect(confirmSenha('pri*','primn*')).toBe(false)
})
it('testa se as senhas elas são iguais',()=>{
    expect(confirmSenha('pri*','pri*')).toBe(true)
})

it('testa se é maior de idade',()=>{
    expect(confirmAge(19)).toBe(true)
})
it('testando se é de menor',()=>{
    expect(confirmAge(17)).toBe(false)
})


it('testa se as duas funções estão certas',()=>{
    expect(onSubmit('pri*','pri*',19)).toBe(true)
})
it('testa se uma das funções não está certa',()=>{
    expect(onSubmit('pri','pri*',19)).toBe(false)
})
