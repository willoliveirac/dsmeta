import Header from "./components/header"
import NotificationButton from "./components/notification-button"
import SalesCard from "./components/salesCard"



function App() {
    return (
        <>

            <Header />
            <main>
                <section id="sales">
                    <div className="dsmeta-container">
                        <SalesCard />
                    </div>
                </section>
            </main>

        </>
    )
}

export default App
