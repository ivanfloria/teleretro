import { useState } from "react"

const key = {
    'a':1,'b':2,'c':3,'d':4,'e':5,'f':6,'g':7,'h':8,'i':9,'j':10,'k':11,'l':12,'m':13,'n':14,'ñ':15,'o':16,'p':17,'q':18,'r':19,'s':20,'t':21,'u':22,'v':23,'w':24,'x':25,'y':26,'z':27
}

const useGetSession = (text) => {
    const [session, setSession] = useState('');

    const normalize = (txt) => {
        if(txt !== undefined){
            const lowercaseText = txt.toLowerCase();
            const normalized = lowercaseText.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            return normalized
        }
    }
    
    const createSession = (text) => {
        const temp = normalize(text);
        let newId = '';
        for (const char of temp){
            if(key[char]){
                newId += key[char]
            }
        }
        setSession(newId)
    }
    
    return {session, createSession};
}

export default useGetSession;