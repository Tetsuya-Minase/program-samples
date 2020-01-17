import 'package:angular/angular.dart';
import 'hero.dart';
import 'hero_component.dart';
import 'hero_service.dart';

@Component(
  selector: 'my-heroes',
  directives: [coreDirectives, HeroComponent],  
  providers: [ClassProvider(HeroService)],
  templateUrl: 'hero_list_component.html',
  styleUrls: ['hero_list_component.css']
)
class HeroListComponent implements OnInit {
  List<Hero> heroes;
  Hero selected;
  final HeroService _heroService;

  HeroListComponent(this._heroService);

  Future<void> _getHeroes() async => heroes = await _heroService.getAll();
  void onSelect(Hero hero) => selected = hero;

  @override
  void ngOnInit() => _getHeroes();

}
