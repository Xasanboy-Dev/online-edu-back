import "../styles/main.css"
import { useEffect, useRef, useState } from "react"
import { Input } from "postcss"

export default function MainPage() {

    const [showInput, setShowInput] = useState(false)
    const [valueInput, setValueInput] = useState(Number(750))

    const summaRef = useRef()

    const handlerInput = (e) => {
        setValueInput(e.target.value)
    }
    const checkValue = () => {
        setShowInput(false)
        if(typeof valueInput !== NaN){
            setValueInput(summaRef.current.value)
        }
    }

    const [info, setInfo] = useState([
        {
            name: "frontend"
        }
    ])
    const [right, setright] = useState(">")
    const [lett, setLet] = useState('a')


    const inpust = document.querySelector('.addInputRight')


    const nameRef = useRef('')

    function click() {
        if (lett == 'a') {
            const inpust = document.querySelector('.addInputRight')
            inpust.classList.remove('close')
            inpust.classList.add('open')
            inpust.style.display = 'flex'
            setLet('b')
        }
        if (lett == 'b') {
            setInfo(value => [...value, {
                name: nameRef.current.value

            }])
        }


    }

    useEffect(() => {
        nameRef.current.value = ''
    },[click])

    function close() {
        const inpust = document.querySelector('.addInputRight')
        inpust.classList.remove('open')
        setTimeout(() => {
            inpust.style.display = 'none'
        }, 500)
        setLet('a')
    }


    return (
        <div className="MainPage">
            <div className="mainHeader">
                <ul className="lists">
                    <img src='../public/pngwing.com (2).png' alt="" />
                    <li className="p" >Finace site</li>
                    <li className="listsItems">Guruh</li>
                    <li className="listsItems">qarzdorlar</li>
                    <li className="listsItems">oylik</li>
                    <li className="listsItems">kritsh</li>
                    <li className="listsItems">oylik</li>
                    <li className="listsItems">chat</li>
                </ul>
                <div className="searchBar">
                    O
                    <input type="text" className="searchInput" placeholder="User name" />
                </div>
                <div className="userInfo">
                    pochta
                    Kalendar
                    <div className="user">
                        <img src='./public/photo-1501196354995-cbb51c65aaea.avif' alt="" />
                        <div className="userNamee">
                            <p className="name">Sarvar</p>
                            <p className="surname">Abdurashidov</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mainInfo">
                <div className="tushumInputs">
                    <div className="tushum">
                        <p>Tushum</p>
                        <h1>200.000.000 sum</h1>
                    </div>

                    <div className="tushum">
                        <p>Kutilayotgan Tushum</p>
                        <h1>400.000.000 sum</h1>
                    </div>
                </div>
                <div className="slikas">
                    <span>Silka Joylash</span>
                    <div className="silkaInputs ">
                        <div className="inputSilka as">
                            <input type="text" placeholder="Telefon" />

                        </div>
                        <div className="inputSilka ">
                            <input type="text" placeholder="http//www.frontent.com" />
                            <input type="text" placeholder="O’quvchi" />
                        </div>
                    </div>
                </div>
                <div className="kurslar">
                    <div className="addInfo">
                        {
                            info.map((item) => (
                                <h1>{item.name}</h1>
                            ))
                        }



                    </div>
                    <div className="dd">
                        <div className="addInputRight close">
                            <input ref={nameRef} type="text" className="addInfoInput" placeholder="add"  />  <p onClick={() => close()} className="right">{right}</p>
                        </div>
                        <p className="aa" onClick={() => click()}>+</p>
                    </div>
                </div>

                 <div className="flex w-full mb-40">

                <form className="UsersInfo">

                    <p>Kursi <select className="">
                        <option value="Frontend">Frontend</option>
                        <option value="Backend">Backend</option>
                        <option value="SMM">SMM</option>
                        </select></p>
                    <p>Gruh nomi <select className="">
                        <option value="Frontend">Frontend F68</option>
                        <option value="Backend">Frontend F69</option>
                        <option value="SMM">Frontend F70</option>
                        </select></p>
                    <p>ismi/familya <input className="span" type="text" placeholder="Jumaniyozov Alibek" /></p>
                    <p>tel <input className="span" type="text" value={+998914373790} /></p>
                        
                        {
                            showInput ? <div className="flex">
                                 <input ref={summaRef} className='a bg-transparent' placeholder='summa ni kiriting' onChange={e => handlerInput(e)} type="text" />
                                 <button className={`a ${showInput ? 'block' : 'hidden'}`} onClick={() => checkValue()}>Complete</button>
                            </div>
                            : <button onClick={() => setShowInput(true)} className="a" >{valueInput} som</button>
                        }

                    <div className="flex justify-between w-full text-white font-semibold">

                    <button className="bg-red-400 p-2 px-4 rounded-xl active:scale-90" >Delete</button>
                    <button className="bg-blue-400 p-2 px-4 rounded-xl active:scale-90 transiton-all" >Tasdiklash {right}</button>
                    </div>

                    
                    
                </form>
                <div className='w-full flex justify-around items-center pb-7 '>
                            
                            <div className='w-32  rounded-full bg-white justify-center flex items-center'>
                                <img src="public/payme-01.png" className='scale-110 bg-center bg-contain' alt="" />
                            </div>
                            
                             <div className='w-32  rounded-full bg-white justify-center flex items-center'>
                                <img src="public/Click-01.png" className='scale-110 bg-center bg-contain' alt="" />
                            </div>
                       
                            
                            <div className='w-32 h-32 rounded-full bg-white justify-center flex items-center'>
                                <img src="public/logo-horizontal-black-colored.png" className='scale-110 bg-center bg-contain' alt="" />
                            </div>
                            
                             <div className='w-32 h-32 rounded-full  bg-white justify-center flex items-center'>
                               <h1 className='w-32 text-xl flex flex-col items-center justify-center font-bold text-black/70'>Humo/<span>UzCard </span></h1>
                            </div>
                       
                            </div>       
                        </div>
            </div>
        </div>
    )
}