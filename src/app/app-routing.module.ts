import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RetrieverComponent } from "./tools/retriever/retriever.component";

const routes: Routes = [
  // {
  //   path: "",
  //   redirectTo: "/retriever",
  //   pathMatch: "full",
  // },
  { path: "retriever", component: RetrieverComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
