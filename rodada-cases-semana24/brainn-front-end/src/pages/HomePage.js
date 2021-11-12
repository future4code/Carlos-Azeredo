import React, { useEffect, useState } from 'react'
import { getLoterias, getConcursos, getResultados } from '../services/get'
import Logo from '../assets/logo.svg'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { ResultadoDiv, SelectDiv, FooterDiv, ConcursoDiv, CorDiv, NumeroDiv, ContainerPage, NumeroConcurso, InfoDiv, DeskDiv, LogoDiv } from './styled'
import gbackGroundColor from '../functions/gbackgroundcolor'


const HomePage = () => {

    const [loterias, setLoterias] = useState([]);
    const [lotteryId, setlotteryId] = useState('0');
    const [concursos, setConcursos] = useState([]);
    const [resultados, setResultados] = useState([]);
    const [cor, setCor] = useState('')

    const { numeros, loteria } = resultados

    const handleChange = event => setlotteryId(event.target.value);

    let concursoAtual = concursos.filter((concurso) => {
        return concurso.loteriaId === lotteryId
    }).map((concurso) => {
        return concurso.concursoId
    })

    let nomeConcurso = loterias.filter((concurso) => {
        return concurso.id === loteria
    }).shift()

    let dataInput = resultados.data
    let data = new Date(dataInput);
    let dataFormatada = data.toLocaleDateString('pt-BR', { timeZone: 'UTC' })



    useEffect(() => {
        getLoterias(setLoterias)
        getConcursos(setConcursos)
        if (concursoAtual.length === 0) getResultados(setResultados, "2359")        
        getResultados(setResultados, concursoAtual)

    }, [lotteryId])

    useEffect(() => {
        gbackGroundColor(setCor)
    }, [resultados.loteria])

   

    return <ContainerPage>

        <CorDiv style={{backgroundColor: gbackGroundColor(lotteryId)}}>
            <div>
                <SelectDiv >
                    <FormControl >
                        <Select
                            sx={{ borderRadius: 6 }}
                            value={lotteryId}
                            onChange={handleChange}
                        >
                            <MenuItem value="Selecione">
                            </MenuItem>
                            {loterias.map((y) => {
                                return <MenuItem
                                    key={y.id}
                                    value={y.id}>{y.nome.toUpperCase()}</MenuItem>
                            })}
                        </Select>
                    </FormControl>
                </SelectDiv>
                {/* LOG'S DE TESTES */}
       {/*  {console.log('------------------------------')})*/}
        {console.log('Estado que guarda os concursos', concursos)}
       {console.log('Nome do concurso atual', nomeConcurso)}
        {console.log('ID', lotteryId)} 
            </div>

            <ConcursoDiv>
                <LogoDiv>
                    <img src={Logo} alt="Logo" />
                    {<h2>{nomeConcurso === undefined ? 'MEGA-SENA' : nomeConcurso.nome.toUpperCase()} </h2>}
                </LogoDiv>
                <NumeroConcurso>
                    {<h3>CONCURSO N° {concursoAtual.length > 0 ? concursoAtual : '2359'}</h3>}
                </NumeroConcurso>

            </ConcursoDiv>
            <DeskDiv>
                {<h3>CONCURSO -  </h3>}
                {<h3> {concursoAtual.length > 0 ? concursoAtual : '2359'} {dataFormatada}</h3>}
            </DeskDiv>
        </CorDiv>
        <InfoDiv>
            <ResultadoDiv>
                {numeros && numeros.map((num) => {
                    return <NumeroDiv>
                        <h3>{num}</h3>
                    </NumeroDiv>
                })}
            </ResultadoDiv>

            <FooterDiv>
                <p> Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</p>
            </FooterDiv>
        
        </InfoDiv>

    </ContainerPage >
}

export default HomePage