import classes from './FilesToDownload.module.css'
const FilesToDownload = () => {

    const files = [
        {
            name: 'Metatrader 4',
            title: 'MetaTrader 4 Android',
            platform: 'Android',
            url: 'https://google.com/earlpappi'
        },
        {
            name: 'Metatrader 4',
            title: 'MetaTrader iOS',
            platform: 'iOS',
            url: 'https://google.com/earlpappi'
        },
        {
            name: 'Metatrader 4',
            title: 'MT4 Windows',
            platform: 'Windows',
            url: 'https://google.com/earlpappi'
        },
        {
            name: 'MetaTrader 5',
            title: 'MT5 Android',
            platform: 'Android',
            url: 'https://google.com/pappi'
        }
    ]
    return (
        <div className='outlet'>
        <h1>Files to Download</h1>
        { files.map(file =>{
            console.log('working ')
            return(
                <div className= { classes.toDownloadCon }>
                    <h3>{ file.name }</h3>
                    <h3>{ file.title }</h3>
                    <h3>{ file.platform }</h3>
                    <a href={ file.url }>Download</a>
                </div>
                
            )
        }) }  

        </div>
    );
}

export default FilesToDownload;