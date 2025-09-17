import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSection, setActiveSection] = useState('home');

  const planets = [
    {
      id: 'earth',
      name: 'Земля',
      description: 'Третья планета от Солнца и единственная известная планета с жизнью',
      distance: '149.6 млн км от Солнца',
      diameter: '12,742 км',
      moons: 1,
      color: 'from-blue-500 to-green-400',
      temperature: '15°C',
      composition: 'Скалистая планета',
      atmosphere: 'Азот (78%), Кислород (21%)'
    },
    {
      id: 'mars',
      name: 'Марс',
      description: 'Красная планета с полярными ледяными шапками',
      distance: '227.9 млн км от Солнца',
      diameter: '6,779 км',
      moons: 2,
      color: 'from-red-500 to-orange-400',
      temperature: '-65°C',
      composition: 'Скалистая планета',
      atmosphere: 'Углекислый газ (95%)'
    },
    {
      id: 'jupiter',
      name: 'Юпитер',
      description: 'Крупнейшая планета Солнечной системы',
      distance: '778.5 млн км от Солнца',
      diameter: '139,820 км',
      moons: 95,
      color: 'from-orange-400 to-yellow-300',
      temperature: '-110°C',
      composition: 'Газовый гигант',
      atmosphere: 'Водород (89%), Гелий (10%)'
    },
    {
      id: 'saturn',
      name: 'Сатурн',
      description: 'Планета с величественными кольцами',
      distance: '1.43 млрд км от Солнца',
      diameter: '116,460 км',
      moons: 146,
      color: 'from-yellow-300 to-amber-200',
      temperature: '-140°C',
      composition: 'Газовый гигант',
      atmosphere: 'Водород (96%), Гелий (3%)'
    }
  ];

  const asteroids = [
    { name: 'Церера', size: '940 км', type: 'Карликовая планета', distance: '2.8 а.е.' },
    { name: 'Веста', size: '525 км', type: 'Астероид', distance: '2.4 а.е.' },
    { name: 'Паллада', size: '512 км', type: 'Астероид', distance: '2.8 а.е.' },
    { name: 'Гигея', size: '430 км', type: 'Астероид', distance: '3.1 а.е.' }
  ];

  const researchData = [
    { title: 'Экзопланеты', value: 5432, unit: 'обнаружено', icon: 'Globe' },
    { title: 'Активные миссии', value: 23, unit: 'аппаратов', icon: 'Satellite' },
    { title: 'Галактики', value: 2000000000, unit: 'млрд', icon: 'Star' },
    { title: 'Световых лет', value: 93, unit: 'до границы', icon: 'Zap' }
  ];

  const galleryImages = [
    { id: 1, title: 'Туманность Орла', description: 'Звездообразующий регион' },
    { id: 2, title: 'Галактика Андромеды', description: 'Ближайшая к нам галактика' },
    { id: 3, title: 'Кольца Сатурна', description: 'Детальный снимок колец' },
    { id: 4, title: 'Поверхность Марса', description: 'Панорама с марсохода' },
    { id: 5, title: 'Юпитер и его спутники', description: 'Система Юпитера' },
    { id: 6, title: 'Солнечная корона', description: 'Атмосфера Солнца' }
  ];

  const sections = [
    { name: 'Планеты', icon: 'Globe', description: 'Исследуйте миры нашей системы' },
    { name: 'Исследования', icon: 'Telescope', description: 'Последние открытия в космосе' },
    { name: 'Галерея', icon: 'ImageIcon', description: 'Удивительные снимки космоса' },
    { name: 'Астероиды', icon: 'Zap', description: 'Космические странники' },
    { name: 'Контакты', icon: 'Satellite', description: 'Связь с исследователями' }
  ];

  return (
    <div className="min-h-screen cosmic-gradient">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-full stellar-glow animate-pulse-cosmic"></div>
              <h1 className="text-2xl font-bold text-accent">SPACE EXPLORATION</h1>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              {['\u0413\u043b\u0430\u0432\u043d\u0430\u044f', '\u041f\u043b\u0430\u043d\u0435\u0442\u044b', '\u0418\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044f', '\u0413\u0430\u043b\u0435\u0440\u0435\u044f', '\u0410\u0441\u0442\u0435\u0440\u043e\u0438\u0434\u044b', '\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b'].map((item) => (
                <Button 
                  key={item} 
                  variant="ghost" 
                  className="hover:text-accent transition-colors"
                  onClick={() => setActiveSection(item.toLowerCase())}
                >
                  {item}
                </Button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Input
                  placeholder="\u041f\u043e\u0438\u0441\u043a \u0432 \u043a\u043e\u0441\u043c\u043e\u0441\u0435..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-48 bg-background/50 border-border"
                />
                <Icon name="Search" size={16} className="absolute right-3 top-3 text-muted-foreground" />
              </div>
              <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 stellar-glow">
                <Icon name="Rocket" size={16} className="mr-2" />
                \u0417\u0430\u043f\u0443\u0441\u043a
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Orbital System */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="relative mb-16">
              {/* Orbital System */}
              <div className="orbit-system mx-auto">
                {/* Central Star */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-full stellar-glow animate-pulse-cosmic">
                  <Icon name="Sun" size={32} className="text-accent-foreground absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
                
                {/* Orbit Rings */}
                <div className="orbit-ring w-32 h-32"></div>
                <div className="orbit-ring w-48 h-48"></div>
                <div className="orbit-ring w-64 h-64"></div>
                <div className="orbit-ring w-80 h-80"></div>
                
                {/* Orbiting Planets */}
                <div className="absolute top-1/2 left-1/2 w-8 h-8 transform -translate-x-1/2 -translate-y-1/2 animate-orbit-1">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-green-400 rounded-full planet-3d"></div>
                </div>
                <div className="absolute top-1/2 left-1/2 w-6 h-6 transform -translate-x-1/2 -translate-y-1/2 animate-orbit-2">
                  <div className="w-full h-full bg-gradient-to-br from-red-500 to-orange-400 rounded-full planet-3d"></div>
                </div>
                <div className="absolute top-1/2 left-1/2 w-12 h-12 transform -translate-x-1/2 -translate-y-1/2 animate-orbit-3">
                  <div className="w-full h-full bg-gradient-to-br from-orange-400 to-yellow-300 rounded-full planet-3d"></div>
                </div>
                
                {/* Asteroids */}
                <div className="asteroid-field">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="asteroid"
                      style={{
                        width: `${Math.random() * 4 + 2}px`,
                        height: `${Math.random() * 4 + 2}px`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 4}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text text-transparent">
              КОСМОС
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Исследуйте бесконечность вселенной. Откройте для себя планеты, астероиды и тайны космоса с помощью интерактивных 3D-моделей
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 stellar-glow">
                <Icon name="Play" size={20} className="mr-2" />
                Начать исследование
              </Button>
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
                <Icon name="Info" size={20} className="mr-2" />
                Узнать больше
              </Button>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-4 h-4 bg-accent rounded-full animate-pulse-cosmic"></div>
            <div className="absolute top-40 right-20 w-2 h-2 bg-secondary rounded-full animate-float"></div>
            <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-accent rounded-full animate-pulse-cosmic"></div>
            <div className="absolute top-60 right-1/3 w-6 h-6 border border-accent rounded-full animate-rotate-slow"></div>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <Tabs value={activeSection} onValueChange={setActiveSection} className="container mx-auto px-4">
        <TabsList className="grid w-full grid-cols-6 mb-8 bg-background/50">
          <TabsTrigger value="home">Главная</TabsTrigger>
          <TabsTrigger value="планеты">Планеты</TabsTrigger>
          <TabsTrigger value="исследования">Исследования</TabsTrigger>
          <TabsTrigger value="галерея">Галерея</TabsTrigger>
          <TabsTrigger value="астероиды">Астероиды</TabsTrigger>
          <TabsTrigger value="контакты">Контакты</TabsTrigger>
        </TabsList>

        {/* Planets Section */}
        <TabsContent value="планеты" className="space-y-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-accent text-accent">
              ПЛАНЕТАРНАЯ СИСТЕМА
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Планеты нашей системы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Каждая планета уникальна. Изучите их характеристики с помощью интерактивных 3D-моделей
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {planets.map((planet, index) => (
              <Card 
                key={planet.id}
                className={`group cursor-pointer transition-all duration-300 hover:scale-105 stellar-glow glass-card ${
                  selectedPlanet === planet.id ? 'ring-2 ring-accent' : ''
                }`}
                onClick={() => setSelectedPlanet(selectedPlanet === planet.id ? null : planet.id)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className={`w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br ${planet.color} planet-3d stellar-glow`}></div>
                  <CardTitle className="text-center">{planet.name}</CardTitle>
                  <CardDescription className="text-center text-sm">
                    {planet.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className={`transition-all duration-300 ${
                  selectedPlanet === planet.id ? 'block' : 'hidden'
                }`}>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Расстояние:</span>
                      <span>{planet.distance}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Диаметр:</span>
                      <span>{planet.diameter}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Температура:</span>
                      <span>{planet.temperature}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Состав:</span>
                      <span>{planet.composition}</span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-muted-foreground text-xs">Атмосфера:</span>
                      <p className="text-xs">{planet.atmosphere}</p>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-muted-foreground">Спутники:</span>
                      <Badge variant="secondary">{planet.moons}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Research Section */}
        <TabsContent value="исследования" className="space-y-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-accent text-accent">
              НАУЧНЫЕ ДАННЫЕ
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Космические исследования</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {researchData.map((item, index) => (
              <Card key={item.title} className="glass-card stellar-glow text-center">
                <CardHeader className="pb-2">
                  <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                    <Icon name={item.icon as any} size={32} className="text-accent" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-accent">
                    {item.value.toLocaleString()}
                  </CardTitle>
                  <CardDescription>{item.unit}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-medium">{item.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="TrendingUp" size={24} className="mr-2 text-accent" />
                  Прогресс исследований
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Изучение Марса</span>
                    <span>87%</span>
                  </div>
                  <Progress value={87} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Поиск экзопланет</span>
                    <span>93%</span>
                  </div>
                  <Progress value={93} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Изучение астероидов</span>
                    <span>76%</span>
                  </div>
                  <Progress value={76} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Исследование галактик</span>
                    <span>54%</span>
                  </div>
                  <Progress value={54} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Satellite" size={24} className="mr-2 text-accent" />
                  Активные миссии
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: 'Mars Rover Perseverance', status: 'Активна', progress: 95 },
                    { name: 'James Webb Telescope', status: 'Активна', progress: 100 },
                    { name: 'Europa Clipper', status: 'Запланирована', progress: 15 },
                    { name: 'Artemis Program', status: 'В разработке', progress: 68 }
                  ].map((mission) => (
                    <div key={mission.name} className="flex items-center justify-between p-3 rounded-lg bg-background/30">
                      <div>
                        <p className="font-medium">{mission.name}</p>
                        <p className="text-sm text-muted-foreground">{mission.status}</p>
                      </div>
                      <Badge variant={mission.status === 'Активна' ? 'default' : 'secondary'}>
                        {mission.progress}%
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Gallery Section */}
        <TabsContent value="галерея" className="space-y-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-accent text-accent">
              КОСМИЧЕСКАЯ ГАЛЕРЕЯ
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Снимки из космоса</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Удивительные изображения далеких галактик, планет и космических явлений
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <Card key={image.id} className="group cursor-pointer overflow-hidden glass-card hover:scale-105 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
                  <div className="absolute inset-0 nebula-bg"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon name="ImageIcon" size={48} className="text-accent/50" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="text-xs">
                      HD
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{image.title}</CardTitle>
                  <CardDescription>{image.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Asteroids Section */}
        <TabsContent value="астероиды" className="space-y-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-accent text-accent">
              ПОЯС АСТЕРОИДОВ
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Космические странники</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Астероиды - это остатки формирования Солнечной системы, которые могут рассказать о её истории
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              {asteroids.map((asteroid, index) => (
                <Card key={asteroid.name} className="glass-card">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-stone-700 rounded-lg asteroid stellar-glow"></div>
                        <div>
                          <CardTitle className="text-lg">{asteroid.name}</CardTitle>
                          <CardDescription>{asteroid.type}</CardDescription>
                        </div>
                      </div>
                      <Badge variant="outline">{asteroid.size}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Расстояние от Солнца:</span>
                      <span>{asteroid.distance}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Zap" size={24} className="mr-2 text-accent" />
                  Пояс астероидов
                </CardTitle>
                <CardDescription>
                  Визуализация расположения крупнейших астероидов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative h-64 bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-lg overflow-hidden">
                  <div className="asteroid-field h-full">
                    {[...Array(15)].map((_, i) => (
                      <div
                        key={i}
                        className="asteroid"
                        style={{
                          width: `${Math.random() * 8 + 4}px`,
                          height: `${Math.random() * 8 + 4}px`,
                          left: `${Math.random() * 90 + 5}%`,
                          top: `${Math.random() * 90 + 5}%`,
                          animationDelay: `${Math.random() * 6}s`,
                          animationDuration: `${Math.random() * 4 + 3}s`
                        }}
                      ></div>
                    ))}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-accent font-medium mb-2">Главный пояс астероидов</p>
                      <p className="text-sm text-muted-foreground">2.2 - 3.2 а.е. от Солнца</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Contacts Section */}
        <TabsContent value="контакты" className="space-y-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-accent text-accent">
              СВЯЗЬ С ЗЕМЛЕЙ
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Контакты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Свяжитесь с нашей командой исследователей космоса
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Отправить сообщение</CardTitle>
                <CardDescription>
                  Присоединяйтесь к нашей космической миссии
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Имя" className="bg-background/50" />
                  <Input placeholder="Email" className="bg-background/50" />
                </div>
                <Input placeholder="Тема сообщения" className="bg-background/50" />
                <textarea 
                  placeholder="Ваше сообщение..."
                  className="w-full h-32 p-3 rounded-md border border-border bg-background/50 resize-none"
                />
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить сообщение
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="glass-card">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Icon name="MapPin" size={24} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-medium">Центр управления полетами</p>
                      <p className="text-sm text-muted-foreground">Москва, Россия</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Icon name="Mail" size={24} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-medium">space@exploration.com</p>
                      <p className="text-sm text-muted-foreground">Связь с командой</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Icon name="Phone" size={24} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-medium">+7 (495) 123-45-67</p>
                      <p className="text-sm text-muted-foreground">Горячая линия</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="flex-1 border-accent text-accent hover:bg-accent/10">
                  <Icon name="Github" size={16} className="mr-2" />
                  GitHub
                </Button>
                <Button variant="outline" size="sm" className="flex-1 border-accent text-accent hover:bg-accent/10">
                  <Icon name="Twitter" size={16} className="mr-2" />
                  Twitter
                </Button>
                <Button variant="outline" size="sm" className="flex-1 border-accent text-accent hover:bg-accent/10">
                  <Icon name="Youtube" size={16} className="mr-2" />
                  YouTube
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>



      {/* Footer */}
      <footer className="mt-20 py-12 border-t border-border/50 bg-background/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-accent rounded-full stellar-glow"></div>
                <h3 className="text-xl font-bold text-accent">SPACE EXPLORATION</h3>
              </div>
              <p className="text-muted-foreground">
                Исследуем космос вместе, открывая тайны вселенной для будущих поколений.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Исследования</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Планеты</li>
                <li>Астероиды</li>
                <li>Экзопланеты</li>
                <li>Галактики</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Миссии</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Mars Exploration</li>
                <li>James Webb</li>
                <li>Artemis Program</li>
                <li>Europa Clipper</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Ресурсы</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Документация</li>
                <li>API</li>
                <li>Открытые данные</li>
                <li>Образование</li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/30">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © 2024 Space Exploration. Все права защищены.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-accent">
                Политика конфиденциальности
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-accent">
                Условия использования
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;