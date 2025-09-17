import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null);

  const planets = [
    {
      id: 'earth',
      name: 'Земля',
      description: 'Третья планета от Солнца и единственная известная планета с жизнью',
      distance: '149.6 млн км от Солнца',
      diameter: '12,742 км',
      moons: 1,
      color: 'from-blue-500 to-green-400'
    },
    {
      id: 'mars',
      name: 'Марс',
      description: 'Красная планета с полярными ледяными шапками',
      distance: '227.9 млн км от Солнца',
      diameter: '6,779 км',
      moons: 2,
      color: 'from-red-500 to-orange-400'
    },
    {
      id: 'jupiter',
      name: 'Юпитер',
      description: 'Крупнейшая планета Солнечной системы',
      distance: '778.5 млн км от Солнца',
      diameter: '139,820 км',
      moons: 95,
      color: 'from-orange-400 to-yellow-300'
    },
    {
      id: 'saturn',
      name: 'Сатурн',
      description: 'Планета с величественными кольцами',
      distance: '1.43 млрд км от Солнца',
      diameter: '116,460 км',
      moons: 146,
      color: 'from-yellow-300 to-amber-200'
    }
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
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-accent">SPACE EXPLORATION</h1>
            <div className="hidden md:flex items-center space-x-6">
              {sections.map((section) => (
                <Button key={section.name} variant="ghost" className="hover:text-accent">
                  {section.name}
                </Button>
              ))}
            </div>
            <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Icon name="Rocket" size={16} className="mr-2" />
              Запуск
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="animate-float mb-8">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-accent to-secondary rounded-full stellar-glow flex items-center justify-center animate-pulse-cosmic">
                <Icon name="Rocket" size={48} className="text-accent-foreground" />
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text text-transparent">
              КОСМОС
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Исследуйте бесконечность вселенной. Откройте для себя планеты, астероиды и тайны космоса
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

      {/* Planets Section */}
      <section className="py-20 bg-background/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-accent text-accent">
              ПЛАНЕТАРНАЯ СИСТЕМА
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Планеты нашей системы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Каждая планета уникальна. Изучите их характеристики и особенности
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {planets.map((planet, index) => (
              <Card 
                key={planet.id}
                className={`group cursor-pointer transition-all duration-300 hover:scale-105 stellar-glow border-border/50 ${
                  selectedPlanet === planet.id ? 'ring-2 ring-accent' : ''
                }`}
                onClick={() => setSelectedPlanet(selectedPlanet === planet.id ? null : planet.id)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${planet.color} animate-float stellar-glow`}></div>
                  <CardTitle className="text-center">{planet.name}</CardTitle>
                  <CardDescription className="text-center text-sm">
                    {planet.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className={`transition-all duration-300 ${
                  selectedPlanet === planet.id ? 'block' : 'hidden'
                }`}>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Расстояние:</span>
                      <span>{planet.distance}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Диаметр:</span>
                      <span>{planet.diameter}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Спутники:</span>
                      <Badge variant="secondary">{planet.moons}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sections Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-accent text-accent">
              ИССЛЕДОВАНИЯ
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Направления изучения</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section, index) => (
              <Card 
                key={section.name}
                className="group hover:scale-105 transition-all duration-300 cursor-pointer stellar-glow border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon name={section.icon as any} size={32} className="text-accent" />
                  </div>
                  <CardTitle className="group-hover:text-accent transition-colors">
                    {section.name}
                  </CardTitle>
                  <CardDescription>{section.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Готовы к межгалактическому путешествию?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Присоединяйтесь к нашей космической миссии и откройте тайны вселенной
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 stellar-glow">
                <Icon name="Rocket" size={20} className="mr-2" />
                Начать миссию
              </Button>
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
                <Icon name="Download" size={20} className="mr-2" />
                Скачать данные
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-accent">SPACE EXPLORATION</h3>
              <p className="text-muted-foreground">Исследуем космос вместе</p>
            </div>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm">
                <Icon name="Mail" size={16} className="mr-2" />
                Контакт
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Github" size={16} className="mr-2" />
                GitHub
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Twitter" size={16} className="mr-2" />
                Twitter
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;