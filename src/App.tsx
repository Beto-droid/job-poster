import { Route, createBrowserRouter, createRoutesFromElements , RouterProvider} from 'react-router-dom';
import HomePage from './pages/HomePage.tsx'
import MainLayout from "./layouts/MainLayout.tsx";
import JobsPage from "./pages/JobsPage.tsx";
import NotFoundPage from './pages/NotFound.tsx'
import JobPage from "./pages/JobPage.tsx";
import { jobLoader } from "./loaders/JobLoader.tsx";
import AddJobPage from "./pages/AddJobPage.tsx";
import { Job } from "./types/JobJsonType.ts";
import { AddJobSubmitType } from "./types/addJobTypes.tsx";
import EditJobPage from "./pages/EditJobPage.tsx";



const App = () => {
    const addJob: AddJobSubmitType = async (newJob: Job) => {
        await fetch('/api/jobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newJob)
        });
        return
    }

    const deleteJob = async (id:Job['id']) => {
        await fetch(`/api/jobs/${id}`, {
            method: 'DELETE',
        });
        return
    }

    const updateJob = async (job:Job) => {
        await fetch(`/api/jobs/${job.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(job)
        });
        return
    }

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={ < HomePage /> }/>
                <Route path={'/jobs'} element={ < JobsPage /> }/>
                <Route path={'/add-job'} element={ < AddJobPage addJobSubmit={addJob}/> }/>
                <Route path={'/edit-job/:id'} element={ < EditJobPage updateJobSubmit={updateJob}/> } loader={jobLoader}/>
                <Route path={'/jobs/:id'} element={ < JobPage deleteJob={deleteJob}/> } loader={jobLoader}/>
                <Route path={'*'} element={ < NotFoundPage /> }/>
            </Route>
        )
    );
    return (<RouterProvider router={router}/>)
}

export default App;