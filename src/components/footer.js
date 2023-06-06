export default function Footer() {
    const year = new Date()

    return (
        <footer className="mt-2 flex flex-col h-10 items-center align-middle justify-center" >
           <small className="text-center">&copy; Copyright {year.getFullYear()}, rentmyCastle. All Rights Reserved</small>
        </footer>
    )
}