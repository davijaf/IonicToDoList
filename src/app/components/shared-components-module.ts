import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { FooterLoadingComponent } from "./footer-loading/footer-loading.component";

@NgModule({
    declarations: [
        FooterLoadingComponent
    ],
    imports: [
        FormsModule,
        IonicModule,
        CommonModule,
    ],
    exports: [
        FooterLoadingComponent
    ]
})
export class SharedComponentsModule{ }