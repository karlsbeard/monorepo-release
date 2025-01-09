import styled from "styled-components"

const Container = styled.div`
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 0 auto;
    top: 20px;
    position: absolute;
`

export const Welcome = () => {
    return (
        <Container>
            <h1>Welcome to React Formily</h1>
            <p>Formily is a form management solution that provides a set of APIs and components for building complex forms in React.</p>
            <p>It is designed to be highly extensible and customizable, allowing developers to create forms that meet their specific requirements.</p>
        </Container>
    )
}