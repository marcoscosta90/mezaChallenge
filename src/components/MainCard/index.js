import React from 'react';
import { LeftContent, RightContent, Content, Title, Main, SubTitle, TopContent, SmallCard, ImageCard, Comments, LongerCard, EndLabel } from './MainCardElements';


const MainCard = () => {
    return (
        <>
            <Main>
                <LeftContent />

                <Content>
                    <TopContent >
                        <Title>
                            Shampoos e Dermocosméticos
                        </Title>
                        <SubTitle>
                            Os shampoos dermocosméticos possuem formulas especiais que, alem de tratar os dios, fortalecem a saude do couro cabeludo - a pele sensivel onde esta a raiz dos cabelos, ele reguiam a oleosidade, hidratam e ajudam a combater a caspa e queda dos fios;
                         </SubTitle>
                    </TopContent>
                    <SmallCard>
                        <Title>
                            Como escolher o melhor shampoo?
                        </Title>
                        <Comments>
                            Os shampoos  dermocosméticos prmocosméticos possuem formulas especiais que, alermocosméticos possuem formulas especiais que, aleossuem formulas es dermocosméticos possuem fofortalecem a saudedermocosméticos possuem formulas especiais que, alem de tratar os dios, fortalecem a saudepeciais que, alem de tratar os dios, fortalecem a saude dermocosméticos possuem formulas especiais que, alem de tratar os dios, fortalecem a saude do couro cabeludo - a pele sensivel onde esta a raiz dos cabelos, ele reguiam a oleosidade, hidratam e ajudam a combater a caspa e queda dos fios;
                        </Comments>
                    </SmallCard>
                    <ImageCard >
                    </ImageCard>
                    <SmallCard>
                        <Title>
                            Queda de cabelo nunca mais
                        </Title>
                        <Comments>
                            Os shampoos  dermocosméticos possuem formulas es dermocosméticos possuem poos  dermocosméticos possuem formulas es dermocosmépoos  dermocosméticos possuem formulas es dermocosméfofortalecem a saudedermocosméticos possuem formulas especiais que, alem de tratar os dios, fortalecem a saudepeciais que, alem de tratar os dios, fortalecem a saude dermocosméticos possuem formulas especiais que, alem de tratar os dios, fortalecem a saude do couro cabeludo - a pele sensivel onde esta a raiz dos cabelos, ele reguiam a oleosidade, hidratam e ajudam a combater a caspa e queda dos fios;
                        </Comments>
                    </SmallCard>
                    <LongerCard>
                        <Title>
                            Anticaspa
                        </Title>
                        <Comments>
                            Os shampoos  dermocosméticos possuem formulas es dermocosméticos possuem fofortalecem a s  dermocosméticos possuem formulas es dermocosméticos possuem fofortalecem a saaudedermocosméticos possuem formulas especiais que, alem de tratar os dios, fortalecem a saudepeciais que, alem de tratar os dios, fortalecem a saude dermocosméticos possuem formulas especiais que, alem de tratar os dios, fortalecem a saude do couro cabeludo - a pele sensivel onde esta a raiz dos cabelos, ele reguiam a oleosidade, hidratam e ajudam a combater a caspa e queda dos fios;
                        </Comments>
                    </LongerCard>
                    <EndLabel>
                        Para mais informações sobre o combate à caspa, acesse o <a style={{color: '#fff', marginLeft: 5}} href="/"> Dermaclub </a>
                    </EndLabel>
                  
                </Content>
                <RightContent />
            </Main>
        </>
    )
}

export default MainCard;
