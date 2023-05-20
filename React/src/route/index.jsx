import {HashRouter, Routes as RouterRoutes, Route} from 'react-router-dom'
import { path } from "./path";
import { Home } from "../pages/Home";
import { ProtectedRoad } from "./ProtectedRoad";
import { EmployeesTable } from "../pages/EmployeesTable";
import { LoginPage } from "../pages/LoginPage";
import { Layout } from "../components";

export const Routes =  ()=> {
    return (
        <HashRouter basename='/'>
            <RouterRoutes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<LoginPage/>}/>
                    <Route path={path.home} element={<ProtectedRoad><Home/></ProtectedRoad>}/>
                    <Route path={path.employeesTable} element={<ProtectedRoad><EmployeesTable/></ProtectedRoad>}/>
                </Route>
            </RouterRoutes>
        </HashRouter>
    )
}