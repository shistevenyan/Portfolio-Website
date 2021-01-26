import React from "react";
import styled from "styled-components";
import Wrapper from "./wrapper";
const Section1Styled = styled.div`background-color: white;`;

function Contact() {
    return (
        <Section1Styled id="contact">
            <Wrapper>
                <h1>Contact</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat blanditiis adipisci eaque animi repellat
                    atque assumenda corporis quidem nostrum ea, nulla qui cupiditate suscipit, quisquam voluptas mollitia ex iusto
                    voluptates.
        </p>
            </Wrapper>
        </Section1Styled>
    )
}

export default Contact;