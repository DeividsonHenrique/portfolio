import styled from "styled-components";

export const DetalhesContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    .container{
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        align-items: start;
        justify-content: space-between;

    }


    .descricao{
        max-width: 620px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
    }

    .botoes{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        
    }


    .sobre{
        margin-block: 10px;

        h2{
            color: white;
            font-family: var(--fonte1);
            font-size: 27px;
            font-weight: 500;
            margin-bottom: 10px;
            
            img{
                margin-right: 10px;
            }
        }

        p{
            color: white;
            font-family: var(--fonte1);
            font-size: 14px;
            font-weight: 400;
            line-height: 22px;
        }
    }


    .funcionalidades, .tecnologias{
        margin-block: 10px;

        h2{
            color: white;
            font-family: var(--fonte1);
            font-size: 27px;
            font-weight: 500;
            margin-bottom: 10px;
            img{
                margin-right: 10px;
            }
        }

        ul{
            list-style-type: none;
            li{
                color: white;
                font-family: var(--fonte1);
                font-size: 14px;
                font-weight: 400;
                line-height: 22px;
            }
        }
    }

    .data{
        color: white;
        font-family: var(--fonte1);
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        img{
            margin-right: 10px;
        }
    }


    .line{
        width: 2px;
        height: 100vh;
        background-color: #770000;
    }


    .imagens{
        max-width: 620px;
        width: 100%;

        img{
            width: 100%;
            margin-block: 10px;
        }
    }
`;