import ContentPage from "../components/Content/ContentPage";

const Home = () => {
    return (
        <ContentPage titulo="Dashboard" caminho={[{nome: "Dashboard", link: "/"}]}>
            <p>Conteudo da página aqui</p>
        </ContentPage>
    );
};

export default Home;