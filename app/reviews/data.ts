export interface IReviews { author: string; text: string; rating: number, date?: string }

function addRandomDatesToObjects(arr: IReviews[]): IReviews[] {
    const startDate = new Date(2014, 0, 1);
    const endDate = new Date(2023, 11, 31);
  
    return arr.map((obj) => {
      const randomDate = new Date(
        startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime())
      );
  
      const day = String(randomDate.getDate()).padStart(2, '0');
      const month = String(randomDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
      const year = randomDate.getFullYear();
  
      obj.date = `${day}-${month}-${year}`;
  
      return obj;
    });
  }
  

const data: IReviews[] = [
  { author: "Анна", text: "Отличный выбор растений! Уже несколько лет сажаю у вас саженцы и все вырастает прекрасно.", rating: 5 },
  { author: "Михаил", text: "Спасибо за качественный посадочный материал. Растения пришли здоровыми и хорошо укоренились.", rating: 4 },
  { author: "Екатерина", text: "Получила заказ в оговоренные сроки. Очень рада приобретению растений для озеленения моего сада.", rating: 4 },
  { author: "Александр", text: "Хочу выразить благодарность за отличное обслуживание и грамотные рекомендации по уходу за растениями.", rating: 5 },
  { author: "Ольга", text: "Плодовые кустарники и ягодные растения из вашего питомника стали настоящей находкой для моего сада.", rating: 5 },
  { author: "Иван", text: "Большой выбор декоративных растений. Наш сад стал настоящим украшением благодаря вашим растениям.", rating: 4 },
  { author: "Мария", text: "Саженцы пришли в хорошей упаковке. Они были аккуратно упакованы и не пострадали во время доставки.", rating: 5 },
  { author: "Дмитрий", text: "Отличный сервис и высокое качество растений. Рекомендую ваш питомник всем своим знакомым.", rating: 5 },
  { author: "Елена", text: "Ваши растения превзошли мои ожидания. Спасибо за красивые и здоровые растения.", rating: 4 },
  { author: "Сергей", text: "Хочу отметить профессионализм вашего персонала. Все вопросы были ответены и помощь оказана оперативно.", rating: 4 },
  { author: 'Иван', rating: 5, text: 'Отличный питомник! Всегда находю здесь качественные саженцы для своего сада.' },
  { author: 'Екатерина', rating: 5, text: 'Растения из этого питомника всегда приживаются и радуют своим ростом. Рекомендую!' },
  { author: 'Алексей', rating: 5, text: 'Огромный выбор плодовых и ягодных растений. Все саженцы здоровые и крепкие.' },
  { author: 'Наталья', rating: 5, text: 'Спасибо за качественные растения! Уже не первый раз обращаюсь в этот питомник и всегда довольна.' },
  { author: 'Михаил', rating: 5, text: 'Рекомендую этот питомник! Здесь можно найти редкие и интересные растения для сада.' },
  { author: 'Светлана', rating: 5, text: 'Отличный выбор декоративных растений. Мой сад стал настоящим украшением благодаря этому питомнику.' },
  { author: 'Андрей', rating: 5, text: 'Саженцы всегда высокого качества. Большое спасибо за вашу работу!' },
  { author: 'Ольга', rating: 5, text: 'Уже несколько лет сажу растения из этого питомника. Всегда довольна результатом.' },
  { author: 'Дмитрий', rating: 5, text: 'Надежный питомник с хорошим ассортиментом. Все растения здоровые и красивые.' },
  { author: 'Анастасия', rating: 5, text: 'Отличный сервис и качественные саженцы. Рекомендую этот питомник всем садоводам.' },
  { author: 'Владимир', rating: 5, text: 'Заказывал саженцы через интернет. Все пришло в целости и сохранности. Спасибо!' },
  { author: 'Елена', rating: 5, text: 'Очень довольна покупкой саженцев. Все растения выглядят здоровыми и сильными.' },
  { author: 'Павел', rating: 5, text: 'Покупал растения для озеленения территории. Все отлично прижилось. Благодаря этим саженцам теперь у нас красивый сад!' },
  { author: 'Алина', rating: 5, text: 'Очень довольна выбором декоративных растений. Мой сад стал настоящим произведением искусства.' },
  { author: 'Сергей', rating: 5, text: 'Отличное качество саженцев и прекрасное обслуживание. Рекомендую этот питомник!' },
  { author: 'Анна', rating: 5, text: 'Мне нравится, какой широкий ассортимент растений предлагает этот питомник. Всегда найду то, что нужно.' },
  { author: 'Константин', rating: 5, text: 'Заказывал саженцы для посадки на участке. Все растения пришли в отличном состоянии. Спасибо вам!' },
  { author: 'Марина', rating: 5, text: 'Я уже несколько раз покупала растения в этом питомнике и каждый раз остаюсь довольна. Большое спасибо за вашу работу!' },
  { author: 'Роман', rating: 5, text: 'Отличный выбор плодовых деревьев. Наш сад теперь богат разнообразием фруктов и ягод.' },
  { author: 'Юлия', rating: 5, text: 'Покупала саженцы для создания вертикального сада. Все растения отлично прижились и радуют глаз.' },
  { author: 'Григорий', rating: 5, text: 'Удивительное место! Всегда нахожу здесь интересные и необычные растения для своего сада.' },
  { author: 'Татьяна', rating: 5, text: 'Растения из этого питомника всегда здоровые и красивые. Спасибо вам за вашу работу!' },
  { author: 'Артем', rating: 5, text: 'Рекомендую этот питомник всем, кто хочет озеленить свою территорию. У них есть все, что нужно.' },
  { author: 'Маргарита', rating: 5, text: 'Мой сад стал просто волшебным благодаря растениям из этого питомника. Очень довольна покупкой.' },
  { author: 'Ирина', rating: 5, text: 'Отличный выбор саженцев и отличное качество. Спасибо вам за вашу работу!' },
  { author: 'Александра', rating: 5, text: 'Я очень довольна сотрудничеством с этим питомником. Здесь можно найти редкие и экзотические растения.' },
  { author: 'Денис', rating: 5, text: 'Саженцы из этого питомника всегда приживаются без проблем. Большой выбор и отличное качество!' },
  { author: 'Елизавета', rating: 5, text: 'Спасибо питомнику за качественные и здоровые растения. Мой сад выглядит прекрасно благодаря вам!' },
  { author: 'Руслан', rating: 5, text: 'Хочу выразить благодарность питомнику за оперативность и качество работы. Рекомендую всем!' },
  { author: 'Оксана', rating: 5, text: 'Отличный выбор плодовых кустарников. Уже несколько сезонов получаем урожай от этих саженцев.' },
  { author: 'Глеб', rating: 5, text: 'Саженцы из этого питомника всегда высокого качества. Спасибо за вашу работу!' },
  { author: 'Алевтина', rating: 5, text: 'Рада, что обратилась в этот питомник. Саженцы пришли в отличном состоянии и быстро прижились.' },
  { author: 'Максим', rating: 5, text: 'Очень понравился ассортимент декоративных растений. Мой сад теперь выглядит красиво и ухоженно.' },
  { author: 'Алиса', rating: 5, text: 'Я довольна покупкой саженцев в этом питомнике. Растения здоровые и красивые. Спасибо вам!' },
  { author: 'Виктор', rating: 5, text: 'Заказывал растения для создания живой изгороди. Все саженцы пришли в отличном состоянии. Рекомендую!' },
  { author: 'Маргарит', rating: 5, text: 'Саженцы из этого питомника всегда высокого качества. Большой выбор и отличный сервис.' },
  { author: 'Евгения', rating: 5, text: 'Растения пришли в отличном состоянии. Очень довольна покупкой в этом питомнике.' },
  { author: 'Георгий', rating: 5, text: 'Очень рад, что обратился к этому питомнику. Саженцы отличного качества, а выбор растений впечатляет.' },
  { author: 'Евгений', rating: 5, text: 'Нашел в этом питомнике все, что нужно для озеленения моего сада. Растения здоровые и красивые.' },
  { author: 'Ангелина', rating: 5, text: 'Отличный питомник! Растения пришли в идеальном состоянии и хорошо прижились.' },
  { author: 'Степан', rating: 5, text: 'Саженцы из этого питомника всегда качественные и здоровые. Очень доволен результатом.' },
  { author: 'Алена', rating: 5, text: 'Благодарю питомник за оперативную доставку и качественные растения. Рекомендую всем садоводам!' },
  { author: 'Николай', rating: 5, text: 'Заказывал плодовые деревья в этом питомнике. Все саженцы пришли в отличном состоянии.' },
  { author: 'Елена', rating: 5, text: 'Являюсь постоянным клиентом этого питомника. Всегда довольна качеством и выбором растений.' },
  { author: 'Игорь', rating: 5, text: 'Спасибо за качественные саженцы! Мой сад выглядит великолепно благодаря вашим растениям.' },
  { author: 'Оксана', rating: 5, text: 'Отличный выбор декоративных растений. Мой сад преобразился благодаря этим саженцам.' },
  { author: 'Дмитрий', rating: 5, text: 'Саженцы из этого питомника всегда здоровые и крепкие. Рекомендую всем садоводам!' },
  { author: 'Екатерина', rating: 5, text: 'Большой выбор растений и отличное качество. Очень довольна покупкой в этом питомнике.' },
  { author: 'Артур', rating: 5, text: 'Саженцы пришли в отличном состоянии и быстро прижились. Рекомендую этот питомник!' },
  { author: 'Алина', rating: 5, text: 'Очень довольна покупкой растений в этом питомнике. Качество на высоте!' },
  { author: 'Роман', rating: 5, text: 'Саженцы из этого питомника всегда высокого качества. Мои растения прекрасно растут и радуют глаз.' },
  { author: 'Владислав', rating: 5, text: 'Рекомендую этот питомник всем садоводам! У них есть все необходимое для создания прекрасного сада.' },
  { author: 'Антонина', rating: 5, text: 'Я давно являюсь клиенткой этого питомника и всегда довольна. Спасибо за ваше качество и сервис!' },
  { author: 'Ирина', rating: 5, text: 'Очень довольна своей покупкой в этом питомнике. Растения здоровые и красивые.' },
  { author: 'Максим', rating: 5, text: 'Отличный выбор плодовых кустарников. Мой сад стал настоящим плодоносящим райским уголком.' },
  { author: 'Екатерина', rating: 5, text: 'Спасибо за качественные саженцы! Мой сад стал ярким и красочным благодаря вашим растениям.' },
  { author: 'Григорий', rating: 5, text: 'Растения из этого питомника всегда приживаются без проблем. Очень доволен результатом.' },
  { author: 'Александра', rating: 5, text: 'Я нашла в этом питомнике все, что мне было нужно. Качество растений превосходное!' },
  { author: 'Сергей', rating: 5, text: 'Отличный выбор декоративных растений. Мой сад стал настоящим украшением благодаря этому питомнику.' },
  { author: 'Татьяна', rating: 5, text: 'Заказывала растения через интернет. Они пришли в отличном состоянии и безопасно упакованы.' },
  { author: 'Виктория', rating: 5, text: 'Я довольна своей покупкой в этом питомнике. Саженцы выглядят здоровыми и крепкими.' },
  { author: 'Артем', rating: 5, text: 'Рекомендую этот питомник всем садоводам. Здесь можно найти редкие и экзотические растения.' },
  { author: 'Марина', rating: 5, text: 'Спасибо за отличное обслуживание и качественные растения. Буду обращаться еще!' },
  { author: 'Алексей', rating: 5, text: 'Я приобрел саженцы фруктовых деревьев в этом питомнике и остался очень доволен. Растения прижились и начали приносить урожай уже через несколько лет.' },
  { author: 'Елена', rating: 5, text: 'Саженцы цветов, которые я заказала в этом питомнике, превзошли все мои ожидания. Цветение было просто великолепным!' },
  { author: 'Дмитрий', rating: 5, text: 'Сотрудничество с этим питомником оказалось настоящим удачей. Качество саженцев на высоте, и цены вполне разумные.' },
  { author: 'Наталья', rating: 5, text: 'Я регулярно приобретаю растения для моего огорода в этом питомнике. Они всегда здоровые, хорошо укореняются и дают обильный урожай.' },
  { author: 'Иван', rating: 5, text: 'Заказывал саженцы декоративных кустарников в этом питомнике. Растения пришли в отличном состоянии и быстро прижились на моем участке.' },
  { author: 'Ольга', rating: 5, text: 'Я нашла в этом питомнике интересные и редкие сорта растений. Они добавили особый шарм моему саду.' },
  { author: 'Павел', rating: 5, text: 'Хочу отметить отличное обслуживание в этом питомнике. Сотрудники всегда готовы помочь с выбором и консультацией.' },
  { author: 'Анна', rating: 5, text: 'Я заказывала саженцы для вертикального сада, и результат меня приятно удивил. Растения красиво разрослись и создали живописную зеленую стену.' },
  { author: 'Константин', rating: 5, text: 'Саженцы из этого питомника отлично зарекомендовали себя. Все растения здоровые и сильные, растут быстро и радуют глаз.' },
  { author: 'Елизавета', rating: 5, text: 'Я давно являюсь постоянным клиентом этого питомника и всегда остаюсь довольна. Растения всегда приходят в хорошесостоянии и быстро приживаются. Каждый раз, когда заказываю саженцы, я уверена в их качестве и здоровье.' },
  { author: 'Андрей', rating: 5, text: 'Питомник предлагает широкий выбор растений различных видов и сортов. Я всегда нахожу то, что мне нужно для моего сада.' },
  { author: 'Валерия', rating: 5, text: 'Сотрудники питомника профессиональны и внимательны к клиентам. Они помогли мне с выбором и дали полезные советы по уходу за растениями.' },
  { author: 'Сергей', rating: 5, text: 'Заказывал саженцы для ландшафтного дизайна. Растения были аккуратно упакованы и быстро доставлены. Они прекрасно вписались в мою композицию.' },
  { author: 'Алисия', rating: 5, text: 'Этот питомник - настоящая находка для любителей необычных и экзотических растений. Я рада, что могу приобрести уникальные виды прямо здесь.' },
  { author: 'Михаил', rating: 5, text: 'Я заказывал растения для создания зеленых насаждений на моем балконе. Саженцы превзошли мои ожидания и стали настоящей украшением моего пространства.' },
  { author: 'Ангелина', rating: 5, text: 'Покупка саженцев в этом питомнике - отличный выбор. Растения пришли здоровыми и хорошо развитыми, а их цены очень конкурентоспособны.' },
  { author: 'Максим', rating: 5, text: 'Я являюсь профессиональным садоводом и всегда заказываю растения в этом питомнике. Они отличаются высоким качеством и разнообразием.' },
  { author: 'Елена', rating: 5, text: 'Я благодарна питомнику за красивые и здоровые растения. Мои клумбы и грядки теперь выглядят прекрасно благодаря им.' },
  { author: 'Даниил', rating: 5, text: 'Я заказывал растения для озеленения моего офиса. Они помогли создать уютную и приятную атмосферу для с  отрудников и посетителей. Растения из этого питомника быстро приспособились к условиям в помещении и стали настоящими живыми акцентами в интерьере.' },
  { author: 'Анна', rating: 5, text: 'Я заказала цветущие растения для своей свадьбы, и они сделали наше торжество еще более ярким и красочным. Гости были в восторге!' },
  { author: 'Алексей', rating: 5, text: 'Благодаря этому питомнику я создал себе настоящий уголок райского сада на своем участке. Растения прекрасно растут и цветут.' },
  { author: 'Ольга', rating: 5, text: 'Я заказывала саженцы роз в этом питомнике, и они оправдали все мои ожидания. Розы прекрасно адаптировались и радуют своими цветами каждый год.' },
  { author: 'Иван', rating: 5, text: 'Спасибо питомнику за отличное качество растений и оперативную доставку. Я всегда могу положиться на этот питомник.' },
  { author: 'Мария', rating: 5, text: 'Я заказывала растения для создания вертикального сада на моем балконе. Растения пришли здоровыми и красивыми, и сейчас они радуют глаз своим зеленым убранством.' },
  { author: 'Артем', rating: 5, text: 'Я давно мечтал о виноградной лозе на своем участке, и в этом питомнике я нашел идеальные саженцы. Теперь у меня есть свой собственный виноградник!' },
  { author: 'Екатерина', rating: 5, text: 'Я заказывала саженцы фруктовых деревьев для своего дачного участка. Растения пришли здоровыми и быстро начали приносить плоды. Теперь у нас свежие фрукты прямо с дерева.' },
  { author: 'Александр', rating: 5, text: 'Я являюсь профессиональным ландшафтным дизайнером, и этот питомник всегда становится моим надежным партнером. Они предлагают широкий выбор растений и всегда готовы помочь с реализацией моих дизайнерских идей. Растения из этого питомника всегда высокого качества, хорошо подходят для создания гармоничных и красивых ландшафтных композиций.' },
  { author: 'Николай', rating: 5, text: 'Я заказывал растения для озеленения моего офиса, и результат превзошел все мои ожидания. Растения создали приятную атмосферу и улучшили качество воздуха в помещении.' },
  { author: 'Елена', rating: 5, text: 'Я являюсь любителем растений и постоянно пополняю свою коллекцию с помощью этого питомника. Здесь я всегда могу найти интересные и необычные виды, которых нет в других местах.' },
  { author: 'Игорь', rating: 5, text: 'Я заказывал растения для создания живой изгороди на моем участке. Саженцы прекрасно прижились и стали надежной защитой от посторонних глаз.' },
  { author: 'Кристина', rating: 5, text: 'Я давно мечтала о розовом саду, и благодаря этому питомнику моя мечта сбылась. Розы, которые я приобрела здесь, обладают прекрасным ароматом и нежными цветами.' },
  { author: 'Максим', rating: 5, text: 'Заказывал растения для создания зеленой зоны в моем офисе. Питомник предоставил большой выбор растений разных размеров и форм, что позволило мне создать интересный и уютный оазис.' },
  { author: 'Анна', rating: 5, text: 'Сотрудники этого питомника всегда готовы помочь и дать рекомендации по уходу за растениями. Я благодарна им за ценные советы и поддержку.' },
  { author: 'Сергей', rating: 5, text: 'Я заказывал саженцы для создания вертикального сада на стенах своего дома. Растения прекрасно прижились и создали эффектный зеленый уголок, который вызывает восхищение у гостей.' },
  { author: 'Марина', rating: 5, text: 'Я постоянно обращаюсь в этот питомник за растениями и всегда остаюсь довольна каждым приобретением. Растения всегда здоровые, красивые и хорошо упакованные приходят ко мне. Я с уверенностью рекомендую этот питомник всем ценителям растений и садоводам.' },
  { author: 'Александра', rating: 5, text: 'Я заказывала саженцы фруктовых деревьев для своего загородного участка. Растения пришли в отличном состоянии, быстро укоренились и уже через несколько лет радуют меня своими плодами.' },
  { author: 'Илья', rating: 5, text: 'Питомник предлагает не только саженцы растений, но и полезные аксессуары для сада. Я приобрел здесь садовые инструменты и они отлично выполняют свою функцию.' },
  { author: 'Ангелина', rating: 5, text: 'Я заказывала растения для создания живого забора вокруг моего дома. Растения хорошо прижились и стали надежной защитой от шума и пыли. Теперь у меня есть уютный и зеленый уголок.' },
  { author: 'Денис', rating: 5, text: 'Сотрудники питомника проявили высокий уровень профессионализма. Они помогли мне выбрать растения, подходящие для моего климата и условий выращивания. Результаты превзошли все ожидания.' },
  { author: 'Виктория', rating: 5, text: 'Я заказывала саженцы для создания цветочных композиций в своем саду. Растения пришли в отличном состоянии, и я с легкостью создала яркие и красочные клумбы и грядки.' },
  { author: 'Григорий', rating: 5, text: 'Я приобрел в этом питомнике растения для своего аквариума. Они хорошо прижились и создали прекрасную подводную растительность, которая стала идеальным местом для обитания рыбок.' },
  { author: 'Екатерина', rating: 5, text: 'Я заказывала саженцы для озеленения моего балкона. Растения были компактными и красивыми, и теперь у меня есть маленький уголок природы прямо у себя дом а. Я очень довольна результатом и наслаждаюсь своим зеленым уголком каждый день.' },
  { author: 'Антон', rating: 5, text: 'Я обратился в этот питомник для приобретения растений для моего нового садового проекта. Сотрудники помогли мне выбрать подходящие растения и дали ценные советы по их уходу. Мой сад выглядит потрясающе благодаря этим растениям.' },
  { author: 'Катерина', rating: 5, text: 'Я заказывала саженцы декоративных кустарников для создания живой изгороди вокруг моего участка. Растения пришли в отличном состоянии и быстро прижились. Теперь у меня есть приватность и красивый вид.' },
  { author: 'Иван', rating: 5, text: 'Я являюсь профессиональным садоводом и регулярно заказываю растения в этом питомнике для своих клиентов. Качество и выбор растений всегда на высоком уровне, что помогает мне создавать удивительные сады.' },
  { author: 'Оксана', rating: 5, text: 'Я заказывала саженцы цветущих деревьев для озеленения моего двора. Растения были здоровыми и красивыми, а цветы заполнили воздух ароматом. Мои соседи в восторге!' },
  { author: 'Алексей', rating: 5, text: 'Питомник предлагает широкий выбор саженцев декоративных растений. Я заказывал здесь несколько раз и всегда получал отличные растения. Благодаря им мой сад преобразился.' },
  { author: 'Наталья', rating: 5, text: 'Я приобрела саженцы растений для создания вертикального сада в моей квартире. Растения оказались здоровыми и красивыми, и теперь у меня есть зеленая стена, которая украшает мой интерьер.' },
  { author: 'Артур', rating: 5, text: 'Я заказывал растения для озеленения моего офисного пространства. Сотрудники питомника помогли мне выбрать подходящие растения, учитывая особенности помещения, и результат превзошел мои ожидания. Офис стал более приятным и комфортным благодаря зеленым растениям, которые создают атмосферу релаксации и улучшают работу сотрудников.' },
  { author: 'Елена', rating: 5, text: 'Я заказывала растения для своего ботанического сада, и выбор в этом питомнике оказался огромным. Я нашла редкие и экзотические растения, которые привлекают внимание посетителей.' },
  { author: 'Михаил', rating: 5, text: 'Я приобрел растения для создания зон отдыха и релаксации на своей террасе. Благодаря этому питомнику, у меня теперь есть уютное место, где можно расслабиться и насладиться природой.' },
  { author: 'Вероника', rating: 5, text: 'Я заказывала растения для оформления свадебного церемониала. Растения пришли свежими и красивыми, и создали романтическую атмосферу. Благодаря этому питомнику наша свадьба стала незабываемой.' },
  { author: 'Дмитрий', rating: 5, text: 'Я обратился в этот питомник для приобретения растений для ландшафтного дизайна моего загородного участка. Сотрудники помогли мне подобрать идеальные растения, учитывая мои пожелания и условия роста.' },
  { author: 'Анастасия', rating: 5, text: 'Я заказывала растения для создания зеленой стены в моем офисе. Сотрудники питомника предоставили мне необходимые консультации и растения, которые идеально подошли для моего проекта. Результат превзошел мои ожидания.' },
  { author: 'Марат', rating: 5, text: 'Я заказывал растения для озеленения моего балкона. Сотрудники питомника помогли мне выбрать подходящие растения, которые максимально использовали доступное пространство. Балкон преобразился и стал настоящим уголком природы.' },
  { author: 'Алена', rating: 5, text: 'Я приобрела саженцы цветущих растений для создания цветочных композиций в моем саду. Растения оказались здоровыми и яркими, и теперь мой сад украшен красочными цветами на протяжении всего сезона. Я очень довольна результатом и получила множество комплиментов от соседей и гостей.' },
  { author: 'Галина', rating: 5, text: 'Я заказывала растения для создания ароматного сада вокруг моего дома. Питомник предложил широкий выбор растений с прекрасным ароматом, и теперь каждый раз, когда выхожу на улицу, наслаждаюсь запахами цветов.' },
  { author: 'Станислав', rating: 5, text: 'Я обратился в этот питомник для приобретения растений для моего ландшафтного проекта. Сотрудники были профессиональными и предоставили мне ценные рекомендации по выбору и размещению растений. Результат превзошел все ожидания.' },
  { author: 'Мария', rating: 5, text: 'Я заказывала растения для создания зон отдыха и релаксации в моем саду. Питомник предоставил мне разнообразные растения, и теперь у меня есть уютные уголки, где можно расслабиться и насладиться природой.' },
  { author: 'Андрей', rating: 5, text: 'Я приобрел растения для создания вертикального сада на стенах моего дома. Сотрудники питомника помогли мне выбрать подходящие растения и дали ценные советы по уходу. Теперь мой дом стал зеленым и привлекательным.' },
  { author: 'Ксения', rating: 5, text: 'Я заказывала растения для создания мини-сада на балконе. Растения были компактными, но в то же время обильно цветущими. Балкон превратился в уютное место, где можно насладиться красотой природы.' },
  { author: 'Игорь', rating: 5, text: 'Я обратился в этот питомник для приобретения растений для моего садового пруда. Растения были здоровыми и красивыми, и теперь пруд выглядит еще привлекательнее.' },
  { author: 'Евгения', rating: 5, text: 'Я заказывала растения для создания зеленой оазисной комнаты в моем доме. Растения, которые я получила из этого питомника, превзошли все мои ожидания. Они привнесли жизнь и свежесть в мои внутренние пространства, создавая атмосферу умиротворения и гармонии.' },
  { author: 'Александра', rating: 5, text: 'Я приобрела растения для создания зон отдыха и релаксации на своем балконе. Сотрудники питомника помогли мне выбрать подходящие растения, которые хорошо растут в условиях ограниченного пространства. Теперь у меня есть уютный уголок на свежем воздухе.' },
  { author: 'Арсений', rating: 5, text: 'Я заказывал растения для озеленения моего ресторана. Растения прекрасно вписались в интерьер и создали атмосферу природы и уюта. Мои клиенты полюбили эту зеленую атмосферу и возвращаются снова и снова.' },
  { author: 'Екатерина', rating: 5, text: 'Я обратилась в этот питомник для приобретения растений для моего оранжерея. Сотрудники были очень профессиональны и помогли мне выбрать разнообразные и экзотические растения. Они хорошо приспособились к условиям оранжереи и радуют глаз круглый год.' },
  { author: 'Максим', rating: 5, text: 'Я заказывал растения для оформления свадьбы моих друзей. Растения были свежими и красивыми, и создали романтическую атмосферу на мероприятии. Все гости оценили оригинальность и красоту цветочных композиций.' },
  { author: 'Алина', rating: 5, text: 'Я приобрела растения для создания зеленого уголка в моем рабочем кабинете. Они не только украсили пространство, но и улучшили воздух, создавая более комфортную и продуктивную рабочую обстановку.' },
  { author: 'Роман', rating: 5, text: 'Я заказывал растения для создания зеленой зоны в моем фитнес-клубе. Растения добавили свежести и эстетики в интерьер, а также создалипривлекательную атмосферу, способствующую релаксации и восстановлению после тренировок. Клиенты оценили зеленые уголки и отметили, что они создают приятную обстановку для занятий спортом.' },
  { author: 'Ирина', rating: 5, text: 'Я обратилась в этот питомник для приобретения растений для моего крытого сада. Сотрудники были очень внимательны к моим пожеланиям и помогли подобрать растения, которые идеально подходят для такого типа сада. Теперь у меня есть маленький уголок природы внутри дома, где я могу наслаждаться зеленью и цветами круглый год.' },
  { author: 'Денис', rating: 5, text: 'Я заказывал растения для создания зеленой озелененной стены в офисе. Питомник предоставил разнообразие растений, которые прекрасно сочетаются друг с другом и создают эффектный визуальный эффект. Такая озелененная стена стала настоящей гордостью нашего офиса и вызывает восторг у посетителей.' },
  { author: 'Ольга', rating: 5, text: 'Я приобрела растения для создания зеленого уголка в моей квартире. Питомник предложил широкий выбор растений, подходящих для жизни внутри помещения. Теперь у меня есть свой собственный миниатюрный сад, который приносит радость и улучшает мое настроение.' },
  { author: 'Алексей', rating: 5, text: 'Я заказывал растения для создания зон отдыха и релаксации в моем саду. Сотрудники питомника помогли мне выбрать растения, которые создают уютную и спокойную атмосферу. Теперь мой сад стал идеальным местом для отдыха и наслаждения природой.' },
//  { author: 'Виктория', rating: 5, text: 'Я обратилась в этот питомник для приобретения растений для моего ботанического проекта. Сотрудники питомника оказались настоящими экспертами в своей области и помогли мне выбрать редкие и интересные растения для моей коллекции. Благодаря этому
];

export const dataReviews = addRandomDatesToObjects(data)