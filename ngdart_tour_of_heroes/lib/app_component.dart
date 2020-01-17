import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'src/hero_service.dart';
import 'src/hero_list_component.dart';
import 'src/routes.dart';

@Component(
  selector: 'my-app',
  template: '''
    <h1>{{title}}</h1>
    <my-heroes></my-heroes>
    <router-outlet [routes]="Routes.all"></router-outlet>
  ''',
  directives: [routerDirectives, HeroListComponent],
  providers: [ClassProvider(HeroService)],
  exports: [RoutePaths, Routes]
)
class AppComponent {
  final title = 'Tour of Heroes';
}
