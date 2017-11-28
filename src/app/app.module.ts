import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import {
    HashLocationStrategy, LocationStrategy
} from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { DetailComponent } from './projects/detail/detail.component';
import { NodeService } from './shared/services/node.service';
import { EditorComponent } from './projects/editor/editor.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbComponent } from './projects/editor/breadcrumb/breadcrumb.component';
import { DebugComponent } from './debug/debug.component';
import { VisualComponent } from './projects/visual/visual.component';
import { CollapsibleTreeComponent } from './projects/collapsible-tree/collapsible-tree.component';
import { BarChartComponent } from './projects/bar-chart/bar-chart.component';
import { DemoAppModule } from './demo-app/demo-app.module';
import { SplitPanelLoginModule } from './split-panel-login/split-panel-login.module';
import { UserService } from './shared/services/user.service';
import { ShareModule } from './share.module';
import { WebserviceModalModule } from './webservice-config-menu/webservice-modal.module';
import {AdminModule} from './admin/admin.module';

@NgModule({
    declarations: [
        AppComponent,
        MainNavComponent,
        HomeComponent,
        CarouselComponent,
        ProjectsComponent,
        DetailComponent,
        EditorComponent,
        BreadcrumbComponent,
        DebugComponent,
        VisualComponent,
        CollapsibleTreeComponent,
        BarChartComponent,
    ],

    imports: [
        ShareModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        DemoAppModule,
        AppRoutingModule,
        SplitPanelLoginModule,
        WebserviceModalModule,
        AdminModule
    ],

    providers: [
        UserService,
        NodeService,
        {provide: LocationStrategy, useClass: HashLocationStrategy},
    ],

    bootstrap: [AppComponent]
})
export class AppModule {
}
