import styled from 'styled-components'

export const ContainerPage = styled.div`
background-color: #e5e3e3;

  @media (min-width: 899px) {
    display: flex;
    height: 696px; 
}  
`

export const FooterDiv = styled.div`
text-align: center;
margin: 32px;
@media (min-width: 900px) {
   
p {
    margin-top: 59px;
}
}
 p{
    font-size: 14px;
    line-height: 21px;
 }
`


export const CorDiv = styled.div`
margin-bottom: 20px;
background-color: ${({ color }) => color};
height: 314px;
clip-path: polygon(12% 94%, 0 100%, 0 0, 100% 0, 100% 33%, 100% 100%, 90% 94%, 75% 90%, 66% 89%, 54% 88%, 43% 88%, 26% 91%);
 @media (min-width: 900px) {
    clip-path: polygon(0);
    height: 100%;
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: right;
    clip-path: polygon(100% 0, 94% 13%, 91% 34%, 91% 50%, 92% 66%, 95% 85%, 100% 99%, 42% 100%, 0 100%, 0 0);
}  
`

export const NumeroConcurso = styled.div`
 @media (min-width: 900px){
    display: none;
} 
`


export const DeskDiv = styled.div`
display: none;
@media (min-width: 900px){
    display: flex;
    height: 90px;
    flex-direction: column;
    justify-content: center;
    margin-top: 223px;
    align-items: center;
    h3{
        line-height: 17,07px;
    }
}
`

export const ResultadoDiv = styled.div`
display: flex;
justify-content: space-around;
width: 100%;
height: 203px;
flex-wrap: wrap; 
align-items: center;
flex-direction: row;
@media (min-width: 900px) {
   
height: 542px;
}
`

export const LogoDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
@media (min-width: 900px){
    flex-direction: row;
    width: 500px;
}
`
export const NumeroDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 30px;
height: 30px;
border-radius: 49%;
background-color: white;
margin-right: 13px;
@media (min-width: 900px) {
    width: 60px;
    height: 60px;
    margin-left: 79px;
}
h3{
    color: black;
    font-weight: 700;  
}
`

export const ConcursoDiv = styled.div`
text-align: center;
h3{
    font-size: 14px;
    margin-top: 33px;
}
h2{
    font-size: 31px;
    margin-top: 5px;
}
  @media (min-width: 899px) {
   
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    margin-top: 138px;
}
`


export const InfoDiv = styled.div`
 @media (min-width: 900px){
    width: 1015px;
} 
`

export const SelectDiv = styled.div`
height: 99px;
display: flex;
width: 99%;
justify-content: center;
align-items: center;
`