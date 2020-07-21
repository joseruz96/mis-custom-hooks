
import { useEffect, useState, useRef } from 'react'

export const useFetch = (url) => {

    const [state, setState] = useState({data: null, loading: true, error: null});

    const isMounted = useRef(true);

    useEffect(() => {
        
        return () => { //CUANDO SE DESMONTE
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {

        setState({data: null, loading: true, error: null});

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setTimeout(() => {
                    if (isMounted.current){
                        setState({
                            data,
                            loading: false,
                            error: null
                        })
                    }
                }, 100);



            })
    }, [url])

    return state;

}
