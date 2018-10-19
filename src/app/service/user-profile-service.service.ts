import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {UserProfile} from '../model/user-profile';
import {Measurement} from '../model/measurement';

@Injectable({
  providedIn: 'root'
})
export class UserProfileServiceService {

  constructor() {
  }
  adjectives = ['adamant', 'adroit', 'amatory', 'animistic', 'antic', 'arcadian', 'baleful', 'bellicose', 'bilious', 'boorish', 'calamitous', 'caustic', 'cerulean', 'comely', 'concomitant', 'contumacious', 'corpulent', 'crapulous', 'defamatory', 'didactic', 'dilatory', 'dowdy', 'efficacious', 'effulgent', 'egregious', 'endemic', 'equanimous', 'execrable', 'fastidious', 'feckless', 'fecund', 'friable', 'fulsome', 'garrulous', 'guileless', 'gustatory', 'heuristic', 'histrionic', 'hubristic', 'incendiary', 'insidious', 'insolent', 'intransigent', 'inveterate', 'invidious', 'irksome', 'jejune', 'jocular', 'judicious', 'lachrymose', 'limpid', 'loquacious', 'luminous', 'mannered', 'mendacious', 'meretricious', 'minatory', 'mordant', 'munificent', 'nefarious', 'noxious', 'obtuse', 'parsimonious', 'pendulous', 'pernicious', 'pervasive', 'petulant', 'platitudinous', 'precipitate', 'propitious', 'puckish', 'querulous', 'quiescent', 'rebarbative', 'recalcitant', 'redolent', 'rhadamanthine', 'risible', 'ruminative', 'sagacious', 'salubrious', 'sartorial', 'sclerotic', 'serpentine', 'spasmodic', 'strident', 'taciturn', 'tenacious', 'tremulous', 'trenchant', 'turbulent', 'turgid', 'ubiquitous', 'uxorious', 'verdant', 'voluble', 'voracious', 'wheedling', 'withering', 'zealous'];
  nouns = ['ninja', 'chair', 'pancake', 'statue', 'unicorn', 'rainbows', 'laser', 'senor', 'bunny', 'captain', 'nibblets', 'cupcake', 'carrot', 'gnomes', 'glitter', 'potato', 'salad', 'toejam', 'curtains', 'beets', 'toilet', 'exorcism', 'stick figures', 'mermaid eggs', 'sea barnacles', 'dragons', 'jellybeans', 'snakes', 'dolls', 'bushes', 'cookies', 'apples', 'ice cream', 'ukulele', 'kazoo', 'banjo', 'opera singer', 'circus', 'trampoline', 'carousel', 'carnival', 'locomotive', 'hot air balloon', 'praying mantis', 'animator', 'artisan', 'artist', 'colorist', 'inker', 'coppersmith', 'director', 'designer', 'flatter', 'stylist', 'leadman', 'limner', 'make-up artist', 'model', 'musician', 'penciller', 'producer', 'scenographer', 'set decorator', 'silversmith', 'teacher', 'auto mechanic', 'beader', 'bobbin boy', 'clerk of the chapel', 'filling station attendant', 'foreman', 'maintenance engineering', 'mechanic', 'miller', 'moldmaker', 'panel beater', 'patternmaker', 'plant operator', 'plumber', 'sawfiler', 'shop foreman', 'soaper', 'stationary engineer', 'wheelwright', 'woodworkers'];
  images = ['http://www.avatarsdb.com/avatars/hi.gif',
    'http://www.avatarsdb.com/avatars/cardiogram_line.gif',
    'http://www.avatarsdb.com/avatars/fire_01.gif',
    'https://avatarfiles.alphacoders.com/154/thumb-154205.gif',
    'https://avatarfiles.alphacoders.com/154/thumb-154654.png',
    'https://avatarfiles.alphacoders.com/153/thumb-153729.jpg',
    'https://avatarfiles.alphacoders.com/154/thumb-154369.png',
    'https://avatarfiles.alphacoders.com/118/thumb-118334.jpg',
    'https://avatarfiles.alphacoders.com/842/thumb-84267.jpg',
    'https://avatarfiles.alphacoders.com/998/thumb-99803.gif',
    'https://avatarfiles.alphacoders.com/717/thumb-717.gif',
    'https://avatarfiles.alphacoders.com/104/thumb-104026.jpg'];

  static randomEl(list) {
    const i = Math.floor(Math.random() * list.length);
    return list[i];
  }

  getUsers(): Observable<UserProfile[]> {
    let userProfiles: UserProfile[];
    userProfiles = new Array(10);

    for (let i = 0; i < 10; i++) {
      userProfiles[i] = new UserProfile();
      userProfiles[i].name = UserProfileServiceService.randomEl(this.adjectives) + ' ' + UserProfileServiceService.randomEl(this.nouns);
      userProfiles[i].profileImage = UserProfileServiceService.randomEl(this.images);


      let measurement = new Measurement();
      measurement.date = new Date();
      measurement.bodyFatPercentage = 16;
      measurement.chest = 88;
      measurement.leftArm = 30;
      measurement.rightArm = 30;
      measurement.waist = 74;
      measurement.rightThigh = 43;
      measurement.leftThigh = 43;
      measurement.rightCalf = 35;
      measurement.rightCalf = 36;
      measurement.weight = 63;

      userProfiles[i].measurements = new Array(2);
      userProfiles[i].measurements[0] = measurement;

      let measurement2 = new Measurement();
      measurement2.date = new Date();
      measurement2.bodyFatPercentage = 16;
      measurement2.chest = 88;
      measurement2.leftArm = 30;
      measurement2.rightArm = 30;
      measurement2.waist = 74;
      measurement2.rightThigh = 43;
      measurement2.leftThigh = 43;
      measurement2.rightCalf = 35;
      measurement2.rightCalf = 36;
      measurement2.weight = 65;
      userProfiles[i].measurements[1] = measurement2;


    }
    return of(userProfiles);
  }
}
