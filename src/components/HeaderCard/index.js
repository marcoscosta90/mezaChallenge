import React from 'react';
import { Image, RightContent, Section, Title, Subtitle, Comment} from './HeaderCardElements';



const HeaderCard = () => {
    return (
        <>
            <Section>
                <Image />
                <RightContent >  
                    <Title>
                        Capilar
                    </Title>
                    <Subtitle>
                        Fortalecimento
                    </Subtitle>
                    <Comment>
                        Com suas fórmulas especiais, os shampoos dermocosméticos ajudam a fortalecer o cabelo, combater a queda e tratar a tão indesejada caspa.
                    </Comment>
                </RightContent>
            </Section>
        </>
    )
}

export default HeaderCard;
