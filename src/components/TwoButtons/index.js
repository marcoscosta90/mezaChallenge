import React from 'react';
import { Empty, RightContent, Section, ButtonPrimary } from './TwoButtonsElements';
import { FaTh } from 'react-icons/fa'
import { RiArrowLeftRightLine } from 'react-icons/ri'

const TwoButtons = () => {
    return (
        <>
            <Section>
                <Empty />
                <RightContent >
                    <ButtonPrimary>
                        <FaTh style={{ marginRight: 5 }} />
                            Quantidade
                    </ButtonPrimary>
                    <ButtonPrimary>
                        <RiArrowLeftRightLine style={{ marginRight: 5 }} />
                         Ordenar</ButtonPrimary>
                </RightContent>
            </Section>
        </>
    )
}

export default TwoButtons;
