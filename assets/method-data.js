// Auto-generated from mds/services/ — do not edit manually
var methodData = {
    "IAnalysisExtensionService": {
        "GetDefectAnalysisViewsByTimePeriod": {d:"İş istasyon ve zaman bazlı ıskarta analiz sonuçları dönülür.",p:[{n:"workstationId",t:"int"},{n:"startTime",t:"DateTime"},{n:"endTime",t:"DateTime"}],r:"List<DefectAnalysisView>"},
        "GetEmployeeAnalysisViewsByTimePeriod": {d:"İş istasyon ve zaman bazlı personel analiz sonuçları dönülür.",p:[{n:"workstationId",t:"int"},{n:"startTime",t:"DateTime"},{n:"endTime",t:"DateTime"}],r:"List<EmployeeAnalysisView>"},
        "GetProductionAnalysisViewsByTimePeriod": {d:"İş istasyon ve zaman bazlı üretim analiz sonuçları dönülür.",p:[{n:"workstationId",t:"int"},{n:"startTime",t:"DateTime"},{n:"endTime",t:"DateTime"}],r:"List<ProductionAnalysisView>"},
        "GetProductionStoppageAnalysisViewsByTimePeriod": {d:"İş istasyon ve zaman bazlı üretim duruş analiz sonuçları dönülür.",p:[{n:"workstationId",t:"int"},{n:"startTime",t:"DateTime"},{n:"endTime",t:"DateTime"}],r:"List<ProductionStoppageAnalysisView>"},
        "GetShiftDefectViews": {d:"İş istasyon ve zaman bazlı vardiya ıskarta analiz sonuçları dönülür.",p:[{n:"workstationId",t:"int"},{n:"startTime",t:"DateTime"},{n:"endTime",t:"DateTime"}],r:"List<ShiftDefectView>"},
        "GetShiftDefectDetailViews": {d:"İş istasyon ve zaman bazlı üretim planı kırılımlı vardiya ıskarta analiz sonuçları dönülür.",p:[{n:"workstationId",t:"int"},{n:"startTime",t:"DateTime"},{n:"endTime",t:"DateTime"}],r:"List<ShiftDefectView>"},
        "GetShiftOeeAnalysisViews": {d:"Mevcut vardiya için Oee analiz sonuçları dönülür.",p:[{n:"workstationId",t:"int"}],r:"List<ShiftOeeAnalysisView>"},
        "GetStoppageAnalysisViewsByTimePeriod": {d:"İş istasyon ve zaman bazlı duruş analiz sonuçları dönülür.",p:[{n:"workstationId",t:"int"},{n:"startTime",t:"DateTime"},{n:"endTime",t:"DateTime"}],r:"List<StoppageAnalysisView>"}
    },
    "IAnalysisViewService": {
        "HandleProductivityAnalysisButtonInteraction": {d:"trex Edge Verimlilik Analizi butonu ile etkileşime geçildiğinde gerçekleşen operasyonlara yönelik işlemler yapılır.",p:[],r:"void"},
        "GetStoppageCountAnalysisViewModelsByTimePeriod": {d:"İş istasyon ve zaman bazlı duruş tekrar analizlerine ait view modeller dönülür.",p:[{n:"workstationId",t:"int"},{n:"startTime",t:"DateTime"},{n:"endTime",t:"DateTime"}],r:"List<StoppageCountAnalysisViewModel>"}
    },
    "IBarcodeExtensionService": {
        "LoadPlanViaJobOrderOrStockBarcode": {d:"İş emri veya stok barkodu okutulduğunda çalıştırılır, standart kurgulara göre iş yükleme işlemini gerçekleştirir.",p:[{n:"workstationId",t:"int"},{n:"barcode",t:"string"}],r:"Response<string>"},
        "LoadPlanViaProductionOrderBarcode": {d:"Üretim sipariş barkodu okutulduğunda çalıştırılır, standart kurgulara göre iş yükleme işlemini gerçekleştirir.",p:[{n:"workstationId",t:"int"},{n:"barcode",t:"string"}],r:"Response<string>"},
        "LoadPlanViaWorkorderSerieBarcode": {d:"İş emri serisi barkodu okutulduğunda ait olan iş emri için iş yükleme işlemi yapılır.",p:[{n:"workstationId",t:"int"},{n:"barcode",t:"string"}],r:"Response<string>"},
        "ProcessKanbanBarcode": {d:"Kanban kart okutulma durumunda mevcut yüklü işin bitirilip okutulan karta ait iş emri için iş yükleme işlemi gerçekleştirilir.",p:[{n:"workstationId",t:"int"},{n:"barcode",t:"string"}],r:"bool"},
        "ProcessSerieBarcode": {d:"Serili barkod okutma işlemi durumunda çalıştırılır, validasyon ve sayaç artış operasyonları gerçekleştirilir.",p:[{n:"workstationId",t:"int"},{n:"barcode",t:"string"}],r:"Response<string>"},
        "ProcessStockBarcode": {d:"Stok barkodu ile sayaç arttırma validasyon ve operasyonlarını gerçekleştirir.",p:[{n:"workstationId",t:"int"},{n:"stockNo",t:"string"},{n:"serialNo",t:"string"}],r:"Response<string>"}
    },
    "IBarcodeViewService": {
        "CheckWebBarcodeQueue": {d:"Dış kaynaklardan iletilen barkod işlem kuyruğu kontrolü yapılır ve ilgili işlevler gerçekleştirilir.",p:[{n:"workstationId",t:"int"}],r:"void"},
        "LoadPlanViaJobOrderOrStockBarcode": {d:"İş emri veya stok barkodu okutulduğunda çalıştırılır, standart kurgulara göre iş yükleme işlemi UI operasyonları dahil olacak şekilde gerçekleştirilir.",p:[{n:"workstationId",t:"int"},{n:"barcode",t:"string"}],r:"bool"},
        "LoadPlanViaProductionOrderBarcode": {d:"Üretim sipariş barkodu okutulduğunda çalıştırılır, standart kurgulara göre iş yükleme işlemi UI operasyonları dahil olacak şekilde gerçekleştirilir.",p:[{n:"workstationId",t:"int"},{n:"barcode",t:"string"}],r:"bool"},
        "LoadPlanViaWorkorderSerieBarcode": {d:"İş emri serisi barkodu okutulduğunda ait olan iş emri için iş yükleme işlemi UI operasyonları dahil olacak şekilde gerçekleştirir.",p:[{n:"workstationId",t:"int"},{n:"barcode",t:"string"}],r:"bool"},
        "ProcessBarcodeScan": {d:"Tüm standart konfigürasyonlar kontrol edilerek barkod işleme operasyonları gerçekleştirilir.",p:[{n:"workstationId",t:"int"},{n:"barcode",t:"string"}],r:"bool"}
    },
    "ICapacityExtensionService": {
        "GetEstimatedPlanCompletionTime": {d:"Öngörülen plan tamamlanma zamanı dönülür.",p:[{n:"workstationId",t:"int"}],r:"DateTime"},
        "GetCurrentCycle": {d:"Mevcut gerçekleşen çevrim süre bilgisi dönülür.",p:[{n:"workstationId",t:"int"}],r:"double"},
        "GetCurrentRotationSpeed": {d:"Mevcut üretim devir hızı bilgisi dönülür.",p:[{n:"workstationId",t:"int"},{n:"calculatedSpeed",t:"double"}],r:"double"},
        "GetCurrentSpeed": {d:"Mevcut üretim hız bilgisi dönülür.",p:[{n:"workstationId",t:"int"},{n:"calculatedSpeed",t:"double"}],r:"double"},
        "GetPlannedCycle": {d:"Planlanan çevrim süre bilgisi dönülür.",p:[{n:"workstationId",t:"int"}],r:"double"},
        "GetPlannedRotationSpeed": {d:"Planlanan üretim devir hız bilgisi dönülür.",p:[{n:"workstationId",t:"int"}],r:"double"},
        "GetPlannedSpeed": {d:"Planlanan üretim hız bilgisi dönülür.",p:[{n:"workstationId",t:"int"}],r:"double"},
        "GetTotalStockCoefficient": {d:"Toplam stok üretim çarpan değeri dönülür.",p:[{n:"workstationId",t:"int"}],r:"double"}
    },
    "ICapacityViewService": {
        "GetCurrentAndPlannedCycleText": {d:"Gerçekleşen ve planlanan çevrim süre bilgisi formatlanmış metin olarak dönülür.",p:[{n:"workstationId",t:"int"}],r:"string"},
        "GetCurrentAndPlannedRotationSpeedText": {d:"Gerçekleşen ve planlanan üretim devir hızı bilgisi formatlanmış metin olarak dönülür.",p:[{n:"workstationId",t:"int"},{n:"calculatedSpeed",t:"double"}],r:"string"},
        "GetCurrentCycleText": {d:"Gerçekleşen çevrim süre bilgisi formatlanmış metin olarak dönülür.",p:[{n:"workstationId",t:"int"}],r:"string"},
        "GetCurrentRotationSpeedText": {d:"Gerçekleşen üretim devir hız bilgisi formatlanmış metin olarak dönülür.",p:[{n:"workstationId",t:"int"},{n:"calculatedSpeed",t:"double"}],r:"string"},
        "GetCurrentSpeedText": {d:"Gerçekleşen üretim hız bilgisi formatlanmış metin olarak dönülür.",p:[{n:"workstationId",t:"int"},{n:"calculatedSpeed",t:"double"}],r:"string"},
        "GetPlannedCycleText": {d:"Planlanan çevrim süre bilgisi formatlanmış metin olarak dönülür.",p:[{n:"workstationId",t:"int"}],r:"string"},
        "GetPlannedRotationSpeedText": {d:"Planlanan üretim devir hız bilgisi formatlanmış metin olarak dönülür.",p:[{n:"workstationId",t:"int"}],r:"string"},
        "GetPlannedSpeedText": {d:"Planlanan üretim hız bilgisi formatlanmış metin olarak dönülür.",p:[{n:"workstationId",t:"int"}],r:"string"}
    },
    "ICompanyExtensionService": {
        "Company": {d:"Sistemin o an çalışmakta olduğu şirket tanım verisi dönülür.",p:[],r:"CompanyModel"}
    },
    "IDcasMessageExtensionService": {
        "CreateDcasMessage": {d:"Uyarı gönderim amaçlı mesaj kaydı oluşturulur.",p:[{n:"message",t:"DcasMessageEntity"}],r:"int"},
        "CreateDcasMessageDetail": {d:"Uyarı gönderim amaçlı mesaj detay kaydı oluşturulur.",p:[{n:"messageDetail",t:"DcasMessageDetailEntity"}],r:"bool"},
        "CreateEventAlert": {d:"Alternatif uyarı tetiklemesi için kayıt oluşturur.",p:[{n:"root",t:"int"},{n:"eventType",t:"int"},{n:"receiptId",t:"int"}],r:"void"},
        "CreateOrUpdateDcasMessageDetailByDeviceId": {d:"Uyarı gönderim amaçlı mesaj detay kaydı DeviceId ve DcasMessageId koşuluna göre eğer mevcut ise güncellenir, aksi durumda yeni kayıt oluştururlur.",p:[{n:"messageDetail",t:"DcasMessageDetailEntity"}],r:"void"},
        "GetDcasMessageById": {d:"Mesaj referansına göre uyarı mesaj kaydı sorgulanır ve dönülür.",p:[{n:"messageId",t:"int"}],r:"DcasMessageEntity"},
        "GetDcasMessageByGlobalAlertId": {d:"İş istasyon referansı, global uyarı referansı ve mesaj tipi koşullarına göre uyarı mesaj kaydını döner.",p:[{n:"workstationId",t:"int"},{n:"messageType",t:"int"},{n:"globalAlertId",t:"int"}],r:"DcasMessageEntity"},
        "GetStoppageMessageDefinitions": {d:"İş istasyon referansı ve duruş referansı bazlı duruş uyarı tanımları sorgulanır ve koleksiyon olarak dönülür.",p:[{n:"workstationId",t:"int"},{n:"stoppcauseCause",t:"StoppageCauseInfo"}],r:"IEnumerable<DcasMessageDefinitionEntity>"},
        "GetUnshownMessages": {d:"trex Edge ile haberleşme amaçlı oluşturulan ve henüz işlenmemiş/gösterilmemiş mesaj kayıtlarına ait view model koleksiyonunu döner.",p:[],r:"IEnumerable<DcasMessageView>"},
        "SendJoborderNotificationIfDefinitionExists": {d:"Uyarı tanımı mevcut ise iş emri yükleme operasyonuna istinaden bildirim gönderimi gerçekleştirilir.",p:[{n:"args",t:"NotificationMessageArgs"}],r:"void"},
        "SendMessageNotificationIfDefinitionExists": {d:"Uyarı tanımı mevcut ise bildirim gönderimi gerçekleştirilir.",p:[{n:"args",t:"NotificationMessageArgs"},{n:"eventType",t:"DcasMessageDefinitionEventType"}],r:"void"},
        "SendOeeNotificationIfDefinitionExists": {d:"Uyarı tanımı mevcut ise ve OEE değeri bildirim koşulları içerisinde ise bildirim gönderimi gerçekleştirilir.",p:[{n:"args",t:"NotificationMessageArgs"}],r:"void"},
        "SendPerformanceNotificationIfDefinitionExists": {d:"Uyarı tanımı mevcut ise ve performans değeri bildirim koşulları içerisinde ise bildirim gönderimi gerçekleştirilir.",p:[{n:"args",t:"NotificationMessageArgs"}],r:"void"},
        "SendStoppageNotificationIfDefinitionExists": {d:"Uyarı tanımı mevcut ise duruş operasyonuna istinaden bildirim gönderimi gerçekleştirilir.",p:[{n:"args",t:"NotificationMessageArgs"}],r:"void"},
        "SetDcasMessageDefinitions": {d:"Uyarı konfigürasyonunun oluşturulması veya güncellenmesi veri tabanından gerçekleştirilir.",p:[{n:"workstationId",t:"int"},{n:"workcenterId",t:"int"},{n:"workstationGroupCode",t:"string"},{n:"lineIds",t:"string"}],r:"void"},
        "UpdateDcasMessage": {d:"Mesaj kaydı güncelleme işlemi gerçekleştirilir.",p:[{n:"message",t:"DcasMessageEntity"}],r:"bool"},
        "UpdateDcasMessageEvent": {d:"Olay mesaj kaydı güncelleme işlemi gerçekleştirilir.",p:[{n:"messageEvent",t:"DcasMessageEventEntity"}],r:"bool"},
        "UpdateMessageReadStatus": {d:"Mesaj okunma durumu güncellenir.",p:[{n:"messageId",t:"int"},{n:"readUserId",t:"int"},{n:"readTime",t:"DateTime"}],r:"void"},
        "UpdateMessageShownStatus": {d:"Mesaj gösterilme durumu güncellenir.",p:[{n:"messageId",t:"int"}],r:"void"},
        "UpdateOrCreateDcasMessageEvent": {d:"Olay mesaj kaydı iş istasyon referansı, duruş referansı, başlangıç zamanı, mesaj olay tipi ve mesaj tanım referansı bazlı sorgulanır, mevcut ise güncelleme değil ise oluşturma işlemleri yapılır.",p:[{n:"messageEvent",t:"DcasMessageEventEntity"}],r:"bool"}
    },
    "IDcasMessageViewService": {
        "HandleMessagesButtonInteraction": {d:"trex Edge Mesajlar butonu ile etkileşime geçildiğinde gerçekleşen operasyonlara yönelik işlemler yapılır.",p:[],r:"void"}
    },
    "IDefectExtensionService": {
        "AnyDefectExistentForSerie": {d:"İlgili seri için herhangi bir hata kaydı var olup olmadığı bilgisi dönülür.",p:[{n:"serieId",t:"int"}],r:"bool"},
        "CreateDefectEntry": {d:"Iskarta kaydı oluşturulur.",p:[{n:"defectEntry",t:"DefectEntryEntity"}],r:"bool"},
        "DeleteDefectEntry": {d:"Iskarta kaydı silinir.",p:[{n:"defectEntry",t:"DefectEntryEntity"}],r:"bool"},
        "GetDefectById": {d:"Iskarta tanımı, tanım referansı bazlı sorgulanarak dönülür.",p:[{n:"defectId",t:"int"}],r:"DefectEntity"},
        "GetDefectByNo": {d:"Iskarta tanımı, tanım numarası bazlı sorgulanarak dönülür.",p:[{n:"defectNo",t:"string"}],r:"DefectEntity"},
        "GetDefectEntriesAmountExceptId": {d:"Gönderilen referansa ait olmayan üretim ıskartalarının miktar toplamını döner.",p:[{n:"workstationId",t:"int"},{n:"planId",t:"int"},{n:"defectId",t:"int"}],r:"double"},
        "GetDefectEntriesBySerieId": {d:"Serili ıskarta girişinde seri referansına göre sorgulama yapılarak ıskarta kayıtları dönülür.",p:[{n:"serieId",t:"int"}],r:"IEnumerable<DefectEntryEntity>"},
        "GetDefectEntryAmount": {d:"Anlık üretime ait toplam ıskarta miktarını döner.",p:[{n:"workstationId",t:"int"},{n:"planId",t:"int"},{n:"stockId",t:"int"}],r:"double"},
        "GetDefectEntryAmountUnit2": {d:"Anlık üretime ait toplam ıskarta miktarını ikinci miktar birimi tipinden döner.",p:[{n:"workstationId",t:"int"},{n:"planId",t:"int"},{n:"stockId",t:"int"}],r:"double"},
        "GetDefectEntryAmountUnit3": {d:"Anlık üretime ait toplam ıskarta miktarını üçüncü miktar birimi tipinden döner.",p:[{n:"workstationId",t:"int"},{n:"planId",t:"int"},{n:"stockId",t:"int"}],r:"double"},
        "GetDefectViewsBySerieId": {d:"Serili ıskarta girişinde seri referansına göre sorgulama yapılarak ıskarta kayıtlarına ait view modeller dönülür.",p:[{n:"serieId",t:"int"}],r:"IEnumerable<DefectEntryView>"},
        "GetMaterialDefectEntryAmount": {d:"Anlık üretime ait iş istasyon ve üretim plan referansı bazlı sarf malzeme ıskarta toplam miktarı dönülür.",p:[{n:"workstationId",t:"int"},{n:"planId",t:"int"}],r:"double"},
        "GetMaterialDefectEntryAmountUnit2": {d:"Anlık üretime ait iş istasyon ve üretim plan referansı bazlı sarf malzeme ıskarta toplam miktarını ikinci miktar tipinden dönülür.",p:[{n:"workstationId",t:"int"},{n:"planId",t:"int"}],r:"double"},
        "GetMaterialDefectEntryAmountUnit3": {d:"Anlık üretime ait iş istasyon ve üretim plan referansı bazlı sarf malzeme ıskarta toplam miktarını üçüncü miktar tipinden dönülür.",p:[{n:"workstationId",t:"int"},{n:"planId",t:"int"}],r:"double"},
        "GetSelectableDefects": {d:"Standart akışa göre ilgili iş istasyonuna bağlı ıskarta girişi için seçimi uygun ıskarta tanımlarını döner.",p:[{n:"workstationId",t:"int"},{n:"defectStockType",t:"DefectStockType"}],r:"IEnumerable<DefectEntity>"},
        "GetSelectableDefectViews": {d:"Standart akışa göre ilgili iş istasyonuna bağlı ıskarta girişi için seçimi uygun ıskarta tanımlarının view modellerini döner.",p:[{n:"workstationId",t:"int"},{n:"defectStockType",t:"DefectStockType"}],r:"IEnumerable<DefectSelectionView>"},
        "GetSerialDefectEntryAmount": {d:"Anlık üretime ait serili ıskarta girişlerinin toplam miktarını döner.",p:[{n:"workstationId",t:"int"},{n:"planId",t:"int"},{n:"stockId",t:"int"}],r:"double"},
        "SetCurrentDefects": {d:"Anlık üretime ait ıskarta kayıtları veri tabanından güncellenir.",p:[{n:"workstationId",t:"int"},{n:"planId",t:"int"}],r:"void"},
        "SetDefectDefinitions": {d:"Iskarta tanımları veri tabanından güncellenir.",p:[{n:"languageId",t:"int"}],r:"void"},
        "SetDefectDefinitionDetails": {d:"Iskarta tanım detayları veri tabanından güncellenir.",p:[{n:"workstationId",t:"int"}],r:"void"},
        "UpdateDefectEntryByDefectReceiptId": {d:"Iskarta kaydı, ıskarta kayıt referansına göre güncellenir.",p:[{n:"defectEntry",t:"DefectEntryEntity"}],r:"bool"},
        "UpdatePreDefinedDefectEntryReceiptId": {d:"Anlık üretim kayıtlarına ait ön fiş referans değeri güncellenir.",p:[{n:"workstationId",t:"int"},{n:"receiptId",t:"int"},{n:"joborderId",t:"int"}],r:"bool"}
    },
    "IDefectViewService": {
        "GetCurrentScrapAmountText": {d:"İlgili indiste yer alan üretilen stok için anlık üretime ait ıskarta miktar ve miktar biriminden oluşan metin dönülür.",p:[{n:"workstationId",t:"int"},{n:"stockIndex",t:"int"}],r:"string"},
        "GetMaterialDefectEntriesByPidReceiptId": {d:"Ön tanımlı fiş referansına bağlı sarf malzeme ıskarta kayıtları dönülür.",p:[{n:"receiptId",t:"int"}],r:"IEnumerable<ProductionReceiptDefectViewModel>"},
        "HandleDefectButtonInteraction": {d:"trex Edge Iskarta Giriş butonu ile etkileşime geçildiğinde gerçekleşen operasyonlara yönelik işlemler yapılır.",p:[],r:"void"}
    },
    "IDepotExtensionService": {
        "GetDepotById": {d:"Depo referansına göre depo tanımı dönülür.",p:[{n:"depotId",t:"int"}],r:"DepotEntity"},
        "GetDepotByNo": {d:"Depo numarasına göre depo tanımı dönülür.",p:[{n:"depotNo",t:"string"}],r:"DepotEntity"}
    },
    "IDesignStyleService": {
        "GetCurrentDesignStyle": {d:"Sistemin çalışmakta olduğu dizayn stil konfigürasyonunu döner.",p:[],r:"DesignStyle"},
        "GetDesignStyleByType": {d:"Dizayn stiline göre konfigürasyon nesnesini döner.",p:[{n:"designStyleType",t:"DesignStyleType"}],r:"DesignStyle"},
        "SetCurrentDesignStyle": {d:"Dizayn stili belirlenir.",p:[{n:"style",t:"DesignStyle"}],r:"void"}
    },
    "IDocumentExtensionService": {
        "GetJobOrderLinkedFilePathsByJobOrderId": {d:"İş emri bağlı doküman dosya yol koleksiyonu dönülür.",p:[{n:"jobOrderId",t:"int"}],r:"List<string>"},
        "GetStockLinkedFilePathsByStockId": {d:"Stok bağlı doküman dosya yol koleksiyonu dönülür.",p:[{n:"stockId",t:"int"}],r:"List<string>"}
    },
    "IDocumentViewService": {
        "HandleDocumentsButtonInteraction": {d:"trex Edge Diğer İşlemler ekranında yer alan Dokümanlar butonu ile etkileşime geçildiğinde gerçekleşen operasyonlara yönelik işlemler yapılır.",p:[],r:"void"},
        "ShowAndValidateDocumentsByConfiguration": {d:"Konfigürasyon tipine göre üretim planı bazında doküman gösterimi üzerinden ek validasyon işlemi gerçekleştirilir.",p:[{n:"planId",t:"int"}],r:"bool"},
        "ShowDocumentsByConfiguration": {d:"Konfigürasyon tipine göre üretim planı bazında doküman gösterimi gerçekleştirilir.",p:[{n:"planId",t:"int"}],r:"void"},
        "ShowAndValidateDocumentsByProductionPlan": {d:"Üretim planı bazında doküman gösterimi üzerinden ek validasyon işlemi gerçekleştirilir.",p:[{n:"planId",t:"int"}],r:"bool"},
        "ShowDocumentsByProductionPlan": {d:"Üretim planı bazında doküman gösterimi gerçekleştirilir.",p:[{n:"planId",t:"int"}],r:"void"},
        "ShowAndValidateDocumentsByStock": {d:"Stok bazında doküman gösterimi üzerinden ek validasyon işlemi gerçekleştirilir.",p:[{n:"stockId",t:"int"}],r:"bool"},
        "ShowDocumentsByStock": {d:"Stok bazında doküman gösterimi gerçekleştirilir.",p:[{n:"stockId",t:"int"}],r:"void"},
        "ShowAndValidateStockLinkedFiles": {d:"Stok bazında bağlı doküman gösterim ve ek validasyon işlemi gerçekleştirilir.",p:[{n:"stockId",t:"int"}],r:"bool"},
        "ShowStockLinkedFiles": {d:"Stok bazında bağlı doküman gösterim gerçekleştirilir.",p:[{n:"stockId",t:"int"}],r:"void"},
        "ShowAndValidateJobOrderLinkedFiles": {d:"İş emri bazında bağlı doküman gösterimi üzerinden ek validasyon işlemi gerçekleştirilir.",p:[{n:"jobOrderId",t:"int"}],r:"bool"}
    },
    "IEmployeeExtensionService": {
        "ChangeEmployee": {d:"İş istasyonunda o an çalışan personelin çıkış işlemi yapılıp yerine yeni personelin giriş işlemi yapılır.",p:[{n:"workstationId",t:"int"},{n:"currentEmployeeId",t:"int"},{n:"newEmployeeId",t:"int"}],r:"void"},
        "GetEmployeeByCardNo": {d:"Personel kart numarasına göre personel tanımını döner.",p:[{n:"cardNo",t:"string"}],r:"EmployeeEntity"},
        "GetEmployeeByEmployeeId": {d:"Personel referansına göre personel tanımını döner.",p:[{n:"employeeId",t:"int"}],r:"EmployeeEntity"},
        "GetEmployeeByEmployeeNo": {d:"Personel numarasına göre personel tanımını döner.",p:[{n:"employeeNo",t:"string"}],r:"EmployeeEntity"},
        "GetEmployeeByEmployeeNoOrCardNo": {d:"Gönderilen parametre personel numarası ve personel kart numarası kayıtlarında sorgulanır, kayıt bulunması halinde ilgili personel tanımını döner.",p:[{n:"no",t:"string"}],r:"EmployeeEntity"},
        "GetEmployeeByMaintenanceEmployeeId": {d:"Bakım personel referansına göre bağlı personel tanımını döner.",p:[{n:"maintenanceEmployeeId",t:"int"}],r:"EmployeeEntity"},
        "GetEmployees": {d:"Personel türüne göre personel tanım koleksiyonu döner.",p:[{n:"employeeType",t:"EmployeeType"}],r:"IEnumerable<EmployeeEntity>"},
        "GetMaintenanceEmployeeByEmployeeId": {d:"Personel eğer bir bakım personeli ise personel tanım referansına göre bakım personel tanımını döner.",p:[{n:"employeeId",t:"int"}],r:"MaintenanceEmployee"},
        "GetMaintenanceEmployeeByEmployeeNo": {d:"Personel eğer bir bakım personeli ise personel tanım numarasına göre bakım personel tanımını döner.",p:[{n:"employeeNo",t:"string"}],r:"MaintenanceEmployee"},
        "GetMaintenanceEmployeeByMaintenanceEmployeeId": {d:"Bakım personeli referansına göre ilgili tanımı döner.",p:[{n:"mainenanceEmployeeId",t:"int"}],r:"MaintenanceEmployee"},
        "GetMaintenanceEmployeeIdByEmployeeId": {d:"Personel tanım referansına göre bakım personel referans bilgisini döner.",p:[{n:"employeeId",t:"int"}],r:"int"},
        "GetOrGenerateTeamId": {d:"Parametre olarak gönderilen personel koleksiyonuna göre eğer takım tanımı mevcut ise ilgili takım referansını, eğer mevcut değil ise yeni takım tanımı oluşturup oluşturulan takım referansını döner.",p:[{n:"employees",t:"List<EmployeeEntity>"}],r:"int"},
        "GetTeamByTeamId": {d:"Takım referansına göre takım bilgisini döner.",p:[{n:"teamId",t:"int"}],r:"Team"},
        "GetTeamByTeamNo": {d:"Takım numarasına göre takım bilgisini döner.",p:[{n:"teamNo",t:"string"}],r:"Team"},
        "IsEmployeeLoggedInAnotherPanel": {d:"Sistemde personelin o an başka bir operatör panelde mevcut olup olmadığı bilgisi dönülür.",p:[{n:"employeeId",t:"int"},{n:"panelId",t:"int"}],r:"Response<string>"},
        "IsEmployeeLoggedInAnotherStation": {d:"Sistemde personelin o an başka bir iş istasyonunda mevcut olup olmadığı bilgisi dönülür.",p:[{n:"employeeId",t:"int"},{n:"workStationId",t:"int"}],r:"Response<string>"},
        "IsEmployeePasswordValid": {d:"Personel ve şifre bilgisi alınarak validasyon gerçekleştirilir.",p:[{n:"employeeNo",t:"string"},{n:"password",t:"string"}],r:"bool"},
        "LoginEmployee": {d:"Personelin giriş işlemi gerçekleştirilir.",p:[{n:"workstationId",t:"int"},{n:"employeeId",t:"int"}],r:"void"},
        "LogoutEmployee": {d:"Personelin çıkış işlemi gerçekleştirilir.",p:[{n:"workstationId",t:"int"},{n:"employeeId",t:"int"},{n:"logoutTime",t:"DateTime"}],r:"void"},
        "SetCurrentTeam": {d:"İş istasyonuna o an giriş yapılı personeller bazında takım tanımını günceller.",p:[{n:"currentTime",t:"DateTime"},{n:"workstationId",t:"int"}],r:"void"},
        "SetEmployeeDefinitions": {d:"Personelin tanım konfigürasyonunun veri tabanından çekilerek oluşturulmasını veya güncellenmesini sağlar.",p:[],r:"void"}
    },
    "IEmployeeViewService": {
        "GetEmployeeApproval": {d:"Personel girişi üzerinden çeşitli operasyonlarda onay mekanizması için personel validasyon işlemini gerçekleştirir.",p:[{n:"approvalType",t:"EmployeeApprovalType"}],r:"EmployeeApprovalResult"},
        "GetEmployeeApprovalToEndStoppage": {d:"Personel girişi üzerinden duruş bitiş işleminde onay mekanizması için personel validasyon işlemini gerçekleştirir.",p:[{n:"stoppageEndType",t:"StoppageEndType"}],r:"EmployeeApprovalResult"},
        "GetEmployeeApprovalToStartStoppage": {d:"Personel girişi üzerinden duruş başlatma işleminde onay mekanizması için personel validasyon işlemini gerçekleştirir.",p:[{n:"stoppageCauseId",t:"int"}],r:"EmployeeApprovalResult"},
        "GetShiftChiefApproval": {d:"Description parametresi üzerinden bilgi gösterimi ile vardiya amiri girişi üzerinden çeşitli operasyonlarda onay mekanizması için validasyon işlemini gerçekleştirir.",p:[{n:"workstationId",t:"int"},{n:"description",t:"string"}],r:"EmployeeApprovalResult"},
        "HandleEmployeeOperationsButtonInteraction": {d:"trex Edge Personel İşlemleri butonu ile etkileşime geçildiğinde gerçekleşen operasyonlara yönelik işlemler yapılır.",p:[],r:"void"},
        "HandleNotifyEmployeeButtonInteraction": {d:"trex Edge Personel Çağırma butonu ile etkileşime geçildiğinde gerçekleşen operasyonlara yönelik işlemler yapılır.",p:[],r:"void"},
        "ValidateEmployee": {d:"Personel girişi istenip giriş yapan personel kaydı dönülür.",p:[{n:"validationConfig",t:"EmployeeValidationConfig"}],r:"EmployeeEntity"}
    },
    "IEnergyViewService": {
        "HandleEnergyButtonInteraction": {d:"trex Edge Enerji Analizi butonu ile etkileşime geçildiğinde gerçekleşen operasyonlara yönelik işlemler yapılır.",p:[],r:"void"}
    },
    "IEquipmentExtensionService": {
        "GetAvailableEquipments": {d:"trex Edge üzerinde entegrasyon işlemleri aktif ise entegrasyon üzerinden üretim planı ve iş istasyonuna göre, değil ise ilgili iş istasyonu ile ilişkili ekipmanların koleksiyonunu döner.",p:[{n:"planId",t:"int"},{n:"workstationId",t:"int"}],r:"IEnumerable<Equipment>"},
        "GetEquipmentById": {d:"Ekipman referansına göre ekipman tanımını döner.",p:[{n:"equipmentId",t:"int"}],r:"Equipment"},
        "GetEquipmentByIdAndType": {d:"Ekipman tipi ve referansına göre ekipman tanımını döner.",p:[{n:"equipmentId",t:"int"},{n:"equipmentType",t:"EquipmentType"}],r:"Equipment"},
        "GetEquipmentByNo": {d:"Ekipman numarasına göre ekipman tanımını döner.",p:[{n:"equipmentNo",t:"string"}],r:"Equipment"},
        "GetEquipmentByNoAndType": {d:"Ekipman tipi ve numarasına göre ekipman tanımını döner.",p:[{n:"equipmentNo",t:"string"},{n:"equipmentType",t:"EquipmentType"}],r:"Equipment"},
        "GetEquipmentIdByNo": {d:"Ekipman numarasına göre ekipman referansını döner.",p:[{n:"equipmentNo",t:"string"}],r:"int"},
        "GetEquipmentIdByNoAndType": {d:"Ekipman tipi ve numarasına göre ekipman referansını döner.",p:[{n:"equipmentNo",t:"string"},{n:"equipmentType",t:"EquipmentType"}],r:"int"},
        "GetEquipmentIdByWorkStationId": {d:"İş istasyon referansına göre iş istasyon numarası ve ekipman numarası eşleşen ekipman tanımının referansını döner.",p:[{n:"workStationId",t:"int"}],r:"int"},
        "GetEquipmentsByWorkStationId": {d:"İş istasyonu ile ilişkili ekipmanların koleksiyonunu döner.",p:[{n:"workStationId",t:"int"}],r:"IEnumerable<Equipment>"},
        "GetEquipmentsByWorkStationIdAndType": {d:"İş istasyonu ile ilişkili ve belirlenen tipteki ekipmanların koleksiyonunu döner.",p:[{n:"workStationId",t:"int"},{n:"equipmentType",t:"EquipmentType"}],r:"IEnumerable<Equipment>"},
        "UpdateEquipment": {d:"Ekipman tanımını günceller.",p:[{n:"equipment",t:"Equipment"}],r:"bool"}
    },
    "IEquipmentViewService": {
        "HandleEquipmentChangeButtonButtonInteraction": {d:"trex Edge Kalıp Değişim butonu ile etkileşime geçildiğinde gerçekleşen operasyonlara yönelik işlemler yapılır.",p:[],r:"void"},
        "SelectEquipment": {d:"İş istasyonu veya iş emrinde ekipman seçimi yapılması öngörülmüş ise ekipman seçimi gerçekleştirilir.",p:[{n:"workstationId",t:"int"}],r:"void"}
    },
    "IForkliftExtensionService": {
        "ApproveForkliftOrdersCompletion": {d:"Aktif forklift görevleri için tamamlanma onay işlemi gerçekleştirilir.",p:[{n:"workStationId",t:"int"}],r:"void"},
        "CreateForkliftOrder": {d:"Forklift görevi oluşturulur.",p:[{n:"forkliftOrder",t:"ForkliftOrderEntity"}],r:"bool"},
        "CreateForkliftOrderDetail": {d:"Forklift görev detayı oluşturulur.",p:[{n:"forkliftOrderDetail",t:"ForkliftOrderDetailEntity"}],r:"void"},
        "DeleteForkliftStock": {d:"Forklift ön tanımlı malzeme listesinden ilgili stok referansı silinir.",p:[{n:"workstationId",t:"int"},{n:"stockId",t:"int"}],r:"bool"},
        "GenerateForkliftOrderId": {d:"Yeni bir Forklift görev referansı oluşturulur.",p:[],r:"int"},
        "IsForkliftOrderAccepted": {d:"Forklift görevinin forklift personeli tarafından kabul edilip edilmediği bilgisi dönülür.",p:[{n:"forkliftOrderId",t:"int"}],r:"bool"},
        "IsForkliftOrderConfirmed": {d:"Forklift görevinin tamamlanma onayının verilip verilmediği bilgisi dönülür.",p:[{n:"forkliftOrderId",t:"int"}],r:"bool"},
        "IsForkliftOrderCreated": {d:"Parametre olarak gönderilen İş istasyonu referansı, üretim planı referansı ve forklift operasyon tipine göre aktif bir forklift görevi bulunup bulunmadığı bilgisi dönülür.",p:[{n:"workstationId",t:"int"},{n:"planId",t:"int"},{n:"type",t:"ForkliftTransferType"}],r:"bool"},
        "UpdateForkliftOrder": {d:"Forklift görevi güncellenir.",p:[{n:"forklifUpdatetOrder",t:"ForkliftOrderEntity"}],r:"bool"}
    },
    "IForkliftViewService": {
        "GetForkliftStockViewModels": {d:"Malzeme isteğinde bulunulabilecek stok view model koleksiyonunu döner.",p:[{n:"joborderIds",t:"string"},{n:"workStationId",t:"int"}],r:"List<ForkliftStockViewModel>"},
        "HandleForkliftButtonInteraction": {d:"trex Edge Forklift İşlemleri butonu ile etkileşime geçildiğinde gerçekleşen operasyonlara yönelik işlemler yapılır.",p:[],r:"void"}
    },
    "IFormControlPresenter": {
        "ActiveForm": {d:"Uygulamadaki gösterilen aktif forma erişim sağlar.",p:[],r:"Form"},
        "ActiveComponent": {d:"Klavye işlemleri için uygulamadaki aktif kontrole erişim sağlar.",p:[],r:"Control"},
        "SetActiveForm": {d:"Uygulamadaki aktif formu set eder.",p:[{n:"form",t:"Form"}],r:"void"},
        "FormShowDialog": {d:"Form gösterim işlemi gerçekleştirir.",p:[{n:"form",t:"Form"}],r:"DialogResult"},
        "SetFormSize": {d:"Ekran çözünürlüğüne göre ekran dizaynının yeniden boyutlandırma işlemlerini yapar.",p:[{n:"form",t:"Form"}],r:"void"},
        "SetIsDynamicFontSizeActive": {d:"İçerik uzunluğuna göre dinamik font boyutlandırma işlevinin aktiflik durumu belirlenir.",p:[{n:"isDynamicFontSizeActive",t:"bool"}],r:"void"},
        "SetControlSize": {d:"Ekran çözünürlüğüne göre kontrolün yeniden boyutlandırma işlemlerini yapar.",p:[{n:"control",t:"Control"}],r:"void"},
        "SetNumericKeyboard": {d:"Aktif form ve odaklanılacak kontrol parametreleri ile nümerik klavye gösterimi yapılır.",p:[{n:"parent",t:"Form"},{n:"control",t:"Control"}],r:"void"},
        "HideNumericKeyboard": {d:"Nümerik klavye kapatılır.",p:[],r:"void"},
        "SetGridKeyboard": {d:"Aktif form ve odaklanılacak grid hücresi parametreleri ile alfa nümerik grid klavye gösterimi yapılır.",p:[{n:"parent",t:"Form"},{n:"component",t:"DataGridViewCell"}],r:"void"},
        "SetActiveGridKeyboardComponent": {d:"Alfa nümerik grid klavye için odaklanılacak hücrenin değişimi gerçekleştirilir.",p:[{n:"component",t:"DataGridViewCell"}],r:"void"},
        "HideGridKeyboards": {d:"Grid için gösterimde olan nümerik ve alfa nümerik klavyelerin kapatılmasını sağlar.",p:[],r:"void"},
        "HideGridKeyboard": {d:"Grid için gösterimde olan alfa nümerik klavyenin kapatılmasını sağlar.",p:[],r:"void"},
        "SetGridNumericKeyboard": {d:"Aktif form ve odaklanılacak grid hücresi parametreleri ile nümerik grid klavye gösterimi yapılır.",p:[{n:"parent",t:"Form"},{n:"component",t:"DataGridViewCell"}],r:"void"},
        "HideGridNumericKeyboard": {d:"Grid için gösterimde olan nümerik klavyenin kapatılmasını sağlar.",p:[],r:"void"},
        "SetKeyboard": {d:"Aktif form ve odaklanılacak kontrol parametreleri ile alfa nümerik klavye gösterimi yapılır. KeyboardPositionType ile klavyenin formun neresinde açılacağı belirlenebilir.",p:[{n:"parent",t:"Form"},{n:"control",t:"Control"},{n:"positionType",t:"KeyboardPositionType"}],r:"void"},
        "SetActiveKeyboardComponent": {d:"Alfa nümerik klavye için odaklanılacak kontrolün değişimi gerçekleştirilir.",p:[{n:"control",t:"Control"}],r:"void"},
        "HideKeyboard": {d:"Gösterimde olan alfa nümerik klavyenin kapatılmasını sağlar.",p:[],r:"void"},
        "SetKeypad": {d:"Aktif form ve odaklanılacak kontrol parametreleri ile nümerik klavye gösterimi yapılır.",p:[{n:"parent",t:"Form"},{n:"control",t:"Control"}],r:"void"},
        "SetActiveKeypadComponent": {d:"Nümerik klavye için odaklanılacak kontrolün değişimi gerçekleştirilir.",p:[{n:"sender",t:"Control"}],r:"void"},
        "HideKeypad": {d:"Gösterimde olan nümerik klavyenin kapatılmasını sağlar.",p:[],r:"void"},
        "IsKeypadActive": {d:"Nümerik klavyenin gösterim durumunu döner.",p:[],r:"bool"},
        "IsKeyBoardActive": {d:"Alfa nümerik klavyenin gösterim durumunu döner.",p:[],r:"bool"},
        "SendEnterKey": {d:"Kontrol için enter tuş basım işlemini simüle eder.",p:[{n:"control",t:"Control"}],r:"void"},
        "SetButtonSettings": {d:"Standart kontrol konfigürasyonu yapılır.",p:[{n:"parent",t:"Control"}],r:"void"},
        "FormHide": {d:"İlgili form gizlenir.",p:[{n:"form",t:"Form"}],r:"void"},
        "FormClose": {d:"İlgili form kapatılır.",p:[{n:"form",t:"Form"}],r:"void"},
        "GetUserInput": {d:"Kullanıcıya metin giriş ekranı gösterilir ve girii yapılan değer döndürülür.",p:[{n:"configuration",t:"UserInputConfig"}],r:"string"},
        "GetUserApproval": {d:"Kullanıcıya onay istek ekranı gösterilir.",p:[{n:"configuration",t:"UserApprovalConfig"}],r:"bool"},
        "GetUserInputWithApproval": {d:"Kullanıcıya hem metin girişi yapabileceği hem de onay işlemi gerçekleştirebileceği ekran gösterimi yapılır.",p:[{n:"configuration",t:"UserInputApprovalConfig"}],r:"InputApprovalResponse"},
        "ShowUserWarning": {d:"Kullanıcıya uyarı ekranı gösterilir, opsiyonel parametre ile kullanıcının ekranı kapatmak için basması gereken buton metni düzenlenebilir. Varsayılan olarak \"Tamam\" metni gösterilir.",p:[{n:"warning",t:"string"},{n:"btnText",t:"string"}],r:"void"},
        "SetFontSize": {d:"Dinamik font boyutu belirleme için kullanılır.",p:[{n:"warning",t:"string"},{n:"btnText",t:"string"}],r:"void"},
        "ShowUserMessage": {d:"Kullanıcıya mesaj gösterimi gerçekleştirilir.",p:[{n:"configuration",t:"UserMessageConfig"}],r:"void"},
        "HideMessage": {d:"Kullanıcıya gösterilmekte olan mesaj parametre ile belirtilen milisaniye kadar bekletilip ardından gizlenir.",p:[{n:"interval",t:"int"}],r:"void"},
        "HideMessageImmediately": {d:"Kullanıcıya gösterilmekte olan süre beklenmeden gizlenir.",p:[],r:"void"},
        "SetTextValue": {d:"Kontrolün Text elemanına sadece mevcut değer değişti ise atama yapılır.",p:[{n:"control",t:"Control"},{n:"text",t:"string"}],r:"void"},
        "GetScreenWidth": {d:"Ekran genişlik değerini döner.",p:[],r:"int"},
        "GetScreenHeight": {d:"Ekran yükseklik değerini döner.",p:[],r:"int"},
        "GetUserButtonSelection": {d:"Kullanıcıya 3 butonlu seçim ekranı gösterimi yapılır.",p:[{n:"configuration",t:"UserButtonSelectionConfig"}],r:"DialogResult"},
        "GetUserSelection": {d:"Kullanıcıya combobox üzerinden gerçekleşecek seçim ekranı gösterimi yapılır.",p:[{n:"userSelectionConfig",t:"UserSelectionConfig<K,V>"}],r:"KeyValuePair<K, V>"},
        "GetUserSelectableSelection": {d:"Kullanıcıya 24 butonlu seçim ekranı gösterilir, isSelectionRequired parametresi true gönderildiği takdirde seçim gerçekleştirilmeden ekrandan çıkışa izin verilmez.",p:[{n:"header",t:"string"},{n:"selectableList",t:"IEnumerable<ISelectable>"},{n:"isSelectionRequired",t:"bool"}],r:"ISelectable"}
    },
    "IIOCardExtensionService": {
        "GetIOCardCommands": {d:"IO kart filtre komutlarını döner.",p:[],r:"IEnumerable<IOCardCommandEntity>"},
        "LogIOCardData": {d:"IO kart verisini loglar.",p:[{n:"comportNo",t:"string"},{n:"data",t:"string"},{n:"forceLogging",t:"bool"}],r:"void"}
    },
    "IIOCardViewService": {
        "HandleIOCardInformationButtonInteraction": {d:"trex Edge IO Kart Bilgi butonu ile etkileşime geçildiğinde gerçekleşen operasyonlara yönelik işlemler yapılır.",p:[],r:"void"}
    },
    "IJobOrderSerieExtensionService": {
        "CreateJobOrderSerie": {d:"Üretim seri kaydı oluşturur.",p:[{n:"joborderSerie",t:"JobOrderSerieEntity"}],r:"int"},
        "DeleteJobOrderSerie": {d:"Seri kaydının silinmesi işlemi yapılır.",p:[{n:"workstationId",t:"int"},{n:"serieNo",t:"string"}],r:"bool"},
        "GetLastProductSerie": {d:"İş istasyonu ve üretim planı bazında henüz entegre edilmemiş son seri kaydını döner.",p:[{n:"workstationId",t:"int"},{n:"planId",t:"int"}],r:"ProductSerie"},
        "GetSerieById": {d:"Seri referansına göre seri kaydını döner.",p:[{n:"serieId",t:"int"}],r:"JobOrderSerieEntity"},
        "GetSerieByIdAndWorkstation": {d:"İş istasyonu ve seri referansına göre seri kaydını döner.",p:[{n:"workstationId",t:"int"},{n:"serieId",t:"int"}],r:"JobOrderSerieEntity"},
        "GetSerieByNo": {d:"Seri referansına göre seri kaydını döner.",p:[{n:"serieNo",t:"string"}],r:"JobOrderSerieEntity"},
        "GetSerieByNoAndWorkstation": {d:"İş istasyonu ve seri numarasına göre seri kaydını döner.",p:[{n:"workstationId",t:"int"},{n:"serieNo",t:"string"}],r:"JobOrderSerieEntity"},
        "IsSerieUnique": {d:"Serinin daha önce işlenip işlenmediği bilgisi dönülür.",p:[{n:"workstationId",t:"int"},{n:"serieNo",t:"string"}],r:"bool"},
        "IsSerieScannedOnTime": {d:"Seri tarama işlemleri arasında belirli bir zaman geçmesi gerektiği konfigürasyonda gereken zamanın geçip geçmediği sonucu dönülür.",p:[{n:"workstationId",t:"int"}],r:"Response<string>"},
        "SetLastSerieScanTime": {d:"Son seri okutulma zamanı güncellenir.",p:[{n:"scanTime",t:"DateTime"}],r:"void"}
    },
    "IJobOrderExtensionService": {
        "GetJobOrderById": {d:"İş emri referansına göre iş emri dönülür.",p:[{n:"joborderId",t:"int"}],r:"JobOrder"},
        "GetJobOrderByNo": {d:"İş emri numarasına göre iş emri dönülür.",p:[{n:"joborderNo",t:"string"}],r:"JobOrder"},
        "GetJobOrderIdByJobOrderNo": {d:"İş emri numarsına göre iş emri referans bilgisi dönülür.",p:[{n:"joborderNo",t:"string"}],r:"int"},
        "GetJobOrderMaterialByItemNo": {d:"İş emri detayındaki ilgili sıra numarasına sahip sarf malzeme.",p:[{n:"joborderId",t:"int"},{n:"itemNo",t:"int"}],r:"Material"},
        "GetJobOrderMaterialByStockId": {d:"İş emri detayındaki ilgili stok referansına ait sarf malzeme verisi dönülür.",p:[{n:"joborderId",t:"int"},{n:"stockId",t:"int"}],r:"JobOrderMaterialEntity"},
        "GetJobOrderMaterials": {d:"İş emri detayındaki sarf malzemeler dönülür.",p:[{n:"joborderId",t:"int"}],r:"IEnumerable<Material>"},
        "GetJobOrderMaterialsByProductTree": {d:"İş emri sarf malzeme koleksiyonu bağlı ürün ağacına göre sorgulanıp dönülür.",p:[{n:"joborderId",t:"int"}],r:"IEnumerable<Material>"},
        "GetJobOrderMaterialViews": {d:"İş emri detayındaki sarf malzemelere ait view model koleksiyonu dönülür.",p:[{n:"joborderId",t:"int"}],r:"IEnumerable<MaterialView>"},
        "GetJobOrderMaterialViewsDueToCurrentConsumption": {d:"Anlık tüketime göre iş emri detayındaki sarf malzemelere ait view model koleksiyonu dönülür.",p:[{n:"joborderId",t:"int"},{n:"consumptions",t:"IEnumerable<Consumption>"}],r:"IEnumerable<MaterialView>"},
        "GetJobOrderNoByJobOrderId": {d:"İş emri referansına göre iş emri numara bilgisi dönülür.",p:[{n:"jobOrderId",t:"int"}],r:"string"},
        "GetJobOrderPokaYokeDefinitions": {d:"İş emrine ait poka yoke tanımları dönülür.",p:[{n:"joborderId",t:"int"}],r:"IEnumerable<JobOrderPokaYokeEntity>"},
        "GetJobOrderPokaYokeItemDefinitionsByJobOrderId": {d:"İş emrine ait poka yoke detay tanımları dönülür.",p:[{n:"joborderId",t:"int"}],r:"IEnumerable<JobOrderPokaYokeItemEntity>"},
        "GetJobOrderPokaYokeMaterials": {d:"İş emri detayındaki poka yoke kontrolü için konfigüre edilen sarf malzemeler dönülür.",p:[{n:"joborderId",t:"int"}],r:"IEnumerable<PokaYokeMaterial>"},
        "GetJobOrdersByGroupNo": {d:"İş emri grup numarasına göre iş emri Üretim sipariş numarasına göre iş emri koleksiyonu dönülür.",p:[{n:"groupNo",t:"string"}],r:"IEnumerable<JobOrderEntity>"},
        "GetJobOrdersByProductionOrderNo": {d:"Üretim sipariş numarasına göre iş emri koleksiyonu dönülür.",p:[{n:"productionOrderNo",t:"string"}],r:"IEnumerable<JobOrderEntity>"},
        "GetJobOrderTraceableMaterials": {d:"İş emri detayındaki lot takipli sarf malzemeler dönülür.",p:[{n:"joborderId",t:"int"}],r:"IEnumerable<Material>"},
        "GetJobOrderTreeUnitQuantity": {d:"İş istasyonu ve iş emri referans listesi baz alınarak üretim kayıt özet verisi dönülür.",p:[{n:"joborderId",t:"int"}],r:"double"},
        "GetJobOrderViewById": {d:"İş emri referansına göre view verisi dönülür.",p:[{n:"JoborderId",t:"int"}],r:"JobOrderView"},
        "GetNextOperationJobOrder": {d:"Üretim sipariş numarası ve operasyon sıra verisi göz önünde bulundurularak sonraki operasyon iş emri verisi dönülür.",p:[{n:"jobOrderId",t:"int"}],r:"JobOrderEntity"},
        "GetPreviousOperationJobOrder": {d:"Üretim sipariş numarası ve operasyon sıra verisi göz önünde bulundurularak önceki operasyon iş emri verisi dönülür.",p:[{n:"jobOrderId",t:"int"}],r:"JobOrderEntity"},
        "GetProducibleSubJobOrders": {d:"İş emrine ait yan ürün koleksiyonu dönülür.",p:[{n:"joborderId",t:"int"}],r:"IEnumerable<SubJobOrderEntity>"},
        "GetProductionScrapAmountByJobOrderId": {d:"İş istasyonu ve iş emri referans listesi baz alınarak üretim ıskarta giriş miktar toplamı dönülür.",p:[{n:"workstationId",t:"int"}],r:"QuantityResult"},
        "GetProductionSummaryByJobOrderId": {d:"İş istasyonu ve iş emri referans listesi baz alınarak üretim kayıt özet verisi dönülür.",p:[{n:"jobOrderIdList",t:"List<int>"},{n:"workstationId",t:"int"}],r:"ProductionReceiptBrief"},
        "IsJobOrderActive": {d:"İş emrinin aktiflik bilgisi dönülür.",p:[{n:"joborderId",t:"int"}],r:"bool"},
        "IsJobOrderExistent": {d:"İş emrinin varlık bilgisi dönülür.",p:[{n:"joborderNo",t:"string"}],r:"bool"},
        "UpdateJobOrderEquipment": {d:"İş emrine bağlı ekipmen referansı ve kapasite çarpanı güncellenir.",p:[{n:"joborderId",t:"int"},{n:"equipmentId",t:"int"},{n:"capacityCoe",t:"double"}],r:"void"},
        "UpdateJobOrderMaterial": {d:"İş emri detayındaki sarf malzeme için güncelleme işlemi yapılır.",p:[{n:"joborderMaterial",t:"JobOrderMaterialEntity"}],r:"bool"},
        "UpdateJobOrderStatus": {d:"İş emri durumu güncellenir.",p:[{n:"jobOrderId",t:"int"},{n:"status",t:"StatusType"}],r:"bool"}
    },
    "IJobOrderViewService": {
        "ShowJoborderSelection": {d:"İş emri seçim ekranı gösterilir.",p:[{n:"workstationIds",t:"string"},{n:"showEmptyList",t:"bool"},{n:"showAllWorkcenterOrders",t:"bool"},{n:"isJobChange",t:"bool"}],r:"FormResponse<int>"}
    },
    "ILabelExtensionService": {
        "GetLabelNoByReceiptType": {d:"Üretim fiş tipine göre ilgili istasyon ve stok için tanımlanan etiket numarasını döner.",p:[{n:"workstationId",t:"int"},{n:"stockId",t:"int"},{n:"receiptType",t:"ProductionReceiptType"}],r:"int"},
        "GetLabelNoToPrintEachCounter": {d:"Her sayaç arttığında etiket yazılması konfigürasyonu durumunda ilgili etiket numarasını döner.",p:[],r:"int"},
        "GetLabelPrintByNo": {d:"Etkieti numarasına göre etiket verisini döner.",p:[{n:"labelNo",t:"int"}],r:"LabelPrintEntity"},
        "GetMaxReprintableLabelCount": {d:"Tekrar yazdırılabilir etiket adet sayısını döner.",p:[{n:"workstationId",t:"int"}],r:"int"},
        "GetPlanInfoLabelNo": {d:"İş bilgisi yazdırma durumunda kullanılacak etiket numarasını döner.",p:[{n:"workstationId",t:"int"}],r:"int"},
        "GetProductionReceiptInterSectionLabelNo": {d:"Üretim ara kesit fişleri için tanımlı etiket numarasını döner.",p:[{n:"workstationId",t:"int"}],r:"int"},
        "GetProductionReceiptLabelNo": {d:"Üretim fişleri için tanımlı etiket numarasını döner.",p:[{n:"workstationId",t:"int"}],r:"int"},
        "GetReprintDayCondition": {d:"Etiket tekrar yazdırma işleminde en fazla kaç gün önceki fişlerin yazdırılabileceği bilgisini döner.",p:[{n:"workstationId",t:"int"}],r:"int"},
        "GetScrapLabelNo": {d:"Iskarta etiketi yazdırılması için tanımlı etiket numarasını döner.",p:[{n:"workstationId",t:"int"}],r:"int"},
        "GetStationConfiguration": {d:"İstasyon etiket konfigürasyonunu döner.",p:[{n:"workstationId",t:"int"}],r:"StationLabelConfiguration"},
        "IsLabelValidToPrintByPrintCount": {d:"Etiket tekrar yazdırma sayısı kontrolü yapılır.",p:[{n:"workstationId",t:"int"},{n:"currentLabelPrintCount",t:"int"}],r:"bool"},
        "IsOnlyShiftChiefCanReprintEnabled": {d:"Etiketi tekrar yazdırma yetkisinin sadece vardiya amirinde bulunup bulunmadığı bilgisini döner.",p:[{n:"workstationId",t:"int"}],r:"bool"},
        "SetStationLabelConfiguration": {d:"İstasyon etiket konfigürasyonunu set eder.",p:[{n:"workstationId",t:"int"},{n:"configuration",t:"StationLabelConfiguration"}],r:"void"},
        "SetStockLabelConfigurations": {d:"Stok etiket konfigürasyonunu set eder.",p:[],r:"void"}
    },
    "ILabelViewService": {
        "HandlePrintPlanInformationButtonInteraction": {d:"trex Edge İş Bilgisi Yazdır butonu ile etkileşime geçildiğinde gerçekleşen operasyonlara yönelik işlemler yapılır.",p:[],r:"void"},
        "HandleRePrintReceiptButtonInteraction": {d:"trex Edge Tekrar Yazdır butonu ile etkileşime geçildiğinde gerçekleşen operasyonlara yönelik işlemler yapılır.",p:[],r:"void"}
    },
    "ILineExtensionService": {
        "DeleteLineStopStatus": {d:"Anlık hat duruş durum kaydı silinir.",p:[{n:"workstationId",t:"int"}],r:"void"},
        "GetBackStationIds": {d:"Hat tanımında yer alan önceki istasyon referansları dönülür.",p:[{n:"lineIds",t:"string"},{n:"workstationId",t:"int"},{n:"isRandomWorkEnabled",t:"bool"}],r:"string"},
        "GetDeviceLineWorkstation": {d:"Panel hat istasyon verisi dönülür.",p:[{n:"lineId",t:"int"}],r:"DeviceLineWorkStationView"},
        "GetLinePlanStates": {d:"Hat üretim plan durum verisi dönülür.",p:[{n:"currentLineId",t:"int"},{n:"lineIds",t:"string"},{n:"planIds",t:"string"}],r:"List<LinePlanStateView>"},
        "GetNextStationIds": {d:"Hat tanımında yer alan sonraki istasyon referansları dönülür.",p:[{n:"lineIds",t:"string"},{n:"workstationId",t:"int"},{n:"isRandomWorkEnabled",t:"bool"}],r:"string"}
    },
    "ILineViewService": {
        "ShowLineSelection": {d:"Birden fazla hat ile çalışabilen istasyonlar için hat seçimi işlemi gerçekleştirilir.",p:[],r:"LineViewModel"}
    },
    "ILogService": {
        "WriteLog": {d:"Yazılan mesajı Information başlığı ile kayıt altına alır",p:[{n:"Log",t:"string"}],r:"void"},
        "WriteError": {d:"Fırlatılan hatanın mesajını ve yazılan mesajı kayıt altına almaya yarar.",p:[{n:"msj",t:"string"},{n:"ex",t:"Exception"}],r:"void"},
        "Info": {d:"Yazılan mesajı Information başlığı ile kayıt altına alır",p:[{n:"msj",t:"string"}],r:"void"},
        "Warning": {d:"Yazılan mesajı Warning başlığı ile kayıt altına alır",p:[{n:"msj",t:"string"}],r:"void"},
        "LogCallStart": {d:"Çağrıyı yapan metot ismini otomatik olarak kayıt altına alır.",p:[{n:"sourceName",t:"string"}],r:"void"},
        "LogCallEnd": {d:"Çağrıyı yapan metot ismini otomatik olarak kayıt altına alır.",p:[{n:"sourceName",t:"string"}],r:"void"},
        "LogSkipMethod": {d:"Gönderilen mesajı ve geldiği metot adını otomatik kayıt altına alır.",p:[{n:"message",t:"string"},{n:"sourceName",t:"string"}],r:"void"},
        "Debug": {d:"Gerçekleşen olayları Debug başlığı ile kayıt altına alır.",p:[{n:"msj",t:"string"}],r:"void"},
        "Error": {d:"Fırlatılan hatanın mesajını ve yazılan mesajı Error başlığı ile kayıt altına alır.",p:[{n:"ex",t:"Exception"},{n:"msj",t:"string"}],r:"void"},
        "Fatal": {d:"Fırlatılan hatanın mesajını ve yazılan mesajı Fatal başlığı ile kayıt altına alır.",p:[{n:"ex",t:"Exception"},{n:"msj",t:"string"}],r:"void"}
    },
    "ILotExtensionService": {
        "AddDcasLot": {d:"Anlık lot tüketim verisi oluşturulur.",p:[{n:"dcasLot",t:"DcasLot"}],r:"void"},
        "AddOrUpdateDcasLot": {d:"Anlık lot tüketim verisi mevcut ise güncellenir, aksi durumda oluşturulur.",p:[{n:"dcasLot",t:"DcasLot"}],r:"void"},
        "AddStockLot": {d:"Lot tanımı oluşturulur.",p:[{n:"stockLot",t:"StockLot"}],r:"void"},
        "CheckLotSummary": {d:"İş istasyonunda mevcut lotlar veri kaynağından tekrar sorgulanarak güncellenir.",p:[{n:"workStationId",t:"int"}],r:"void"},
        "DeleteDcasLot": {d:"Anlık lot tüketim verisi silinir.",p:[{n:"workstationId",t:"int"},{n:"lotNo",t:"string"}],r:"void"},
        "DeleteDcasLotByItemNo": {d:"Anlık lot tüketim verisi sıra numarası bazlı silinir.",p:[{n:"workstationId",t:"int"},{n:"joborderId",t:"int"},{n:"stockLotId",t:"int"},{n:"itemNo",t:"int"}],r:"void"},
        "DeleteDcasLotsByWorkstationId": {d:"İş istasyonuna ait tüm anlık lot tüketim verisi silinir.",p:[{n:"workstationId",t:"int"}],r:"void"},
        "DeleteDcasLotsByWorkstationIdAndJoborderIds": {d:"Anlık lot tüketim verisi parametreler ile gelen iş istasyon referansı ve iş emirleri bazında silinir.",p:[{n:"workstationId",t:"int"},{n:"joborderSummaries",t:"List<JoborderSummary>"}],r:"void"},
        "DeleteDcasLotsIfNotExistInMaterials": {d:"Anlık lot tüketim verisinde eğer parametre ile gönderilen iş emirlerine ait sarf detay stoklarında bulunmayan bir malzemeye ait lot mevcut ise, silinir.",p:[{n:"workstationId",t:"int"},{n:"joborderIds",t:"string"}],r:"void"},
        "DeletePidLotsByPidreceiptId": {d:"Ön tanımlı üretim fiş referansına göre üretim plan lot verisi silinir.",p:[{n:"pidreceiptId",t:"int"}],r:"void"},
        "GeneratePlanLotsFromDcasLots": {d:"Plan lot verisi anlık lot tüketim verisinden oluşturulur.",p:[{n:"workstationId",t:"int"},{n:"planId",t:"int"},{n:"joborderId",t:"int"},{n:"productionQuantity",t:"double"}],r:"Response<string>"},
        "GeneratePlanLotsFromDcasLotsByActualConsumption": {d:"Plan lot verisi anlık lot tüketim verisinden tüketim sayaçları baz alınarak oluşturulur.",p:[{n:"workstationId",t:"int"},{n:"planId",t:"int"},{n:"joborderId",t:"int"},{n:"productionQuantity",t:"double"},{n:"context",t:"ConsumptionStateContext"}],r:"Response<string>"},
        "GetAvailableLots": {d:"Entegrasyon durumu aktif ise dış sistemden, değil ise iç sorgu ile uygun lot listesi dönülür.",p:[{n:"lotRequest",t:"LotRequestBase"}],r:"IEnumerable<LotView>"},
        "GetDcasLotByLotNo": {d:"Lot numarasına göre anlık tüketim lot verisini döner.",p:[{n:"workstationId",t:"int"},{n:"lotNo",t:"string"}],r:"DcasLot"},
        "GetDcasLotsByWorkstationAndJoborderId": {d:"İş istasyon referansı ve iş emri referansına göre anlık tüketim lot veri koleksiyonunu döner.",p:[{n:"workstationId",t:"int"},{n:"joborderId",t:"int"}],r:"IEnumerable<DcasLot>"},
        "GetDcasLotsByWorkstationAndJoborderIdAndItemNo": {d:"İş istasyon referansı, iş emri referansı ve sarf sıra numarasına göre anlık tüketim lot veri koleksiyonunu döner.",p:[{n:"workstationId",t:"int"},{n:"joborderId",t:"int"},{n:"itemNo",t:"int"}],r:"IEnumerable<DcasLot>"},
        "GetDcasLotsByWorkstationId": {d:"İş istasyon referansına göre anlık tüketim lot veri koleksiyonunu döner.",p:[{n:"workstationId",t:"int"}],r:"IEnumerable<DcasLot>"},
        "GetDcasLotViewModelsByWorkstationId": {d:"İş istasyon referansına göre anlık tüketim lot veri view model koleksiyonunu döner.",p:[{n:"workstationId",t:"int"}],r:"IEnumerable<DcasLotView>"},
        "GetLotSummary": {d:"Lot bilgisi entegrasyon durumuna göre dış sistem veya iç sorgu ile sorgulanır ve dönülür.",p:[{n:"lotRequest",t:"LotRequest"}],r:"LotView"},
        "GetStockLotByLotNo": {d:"Lot numarasına göre lot tanımı dönülür.",p:[{n:"lotNo",t:"string"}],r:"StockLot"},
        "GetStockLotByStockLotId": {d:"Lot referansına göre lot tanımı dönülür.",p:[{n:"stockLotId",t:"int"}],r:"StockLot"},
        "IsDcasLotExistent": {d:"Anlık tüketim lot veri varlık kontrolü yapılır.",p:[{n:"workstationId",t:"int"},{n:"stockLotId",t:"int"},{n:"joborderId",t:"int"},{n:"stockId",t:"int"},{n:"itemNo",t:"int"}],r:"bool"},
        "IsLotSelectedForAllTraceableMaterials": {d:"Tüm lot takipli malzemeler için lot girişi gerçekleştirilip gerçekleştirilmedi sonucunu döner.",p:[{n:"workstationId",t:"int"},{n:"joborderId",t:"int"}],r:"bool"},
        "IsStockLotExistent": {d:"Lot tanımının varlık kontrolü gerçekleştirilir.",p:[{n:"lotNo",t:"string"}],r:"bool"},
        "ProcessMaterialLotSelection": {d:"Lot giriş operasyonları gerçekleştirilir.",p:[{n:"planId",t:"int"},{n:"workstationId",t:"int"},{n:"material",t:"Material"},{n:"lot",t:"LotView"}],r:"Response<string>"},
        "SetConsumptionLots": {d:"Anlık tüketim değerleri ile lot girişleri veri tabanı üzerinden eşleştirilir.",p:[{n:"workStationId",t:"int"}],r:"void"},
        "UpdateDcasLotAmounts": {d:"Anlık tüketim lot giriş çıkış miktarları güncellenir.",p:[{n:"lotNo",t:"string"},{n:"entryAmount",t:"double"},{n:"exitAmount",t:"double"}],r:"void"},
        "UpdateDcasLotAmountsByWorkstationId": {d:"Anlık tüketim lot giriş çıkış miktarları iş istasyon referansı bazlı güncellenir.",p:[{n:"workstationId",t:"int"},{n:"lotNo",t:"string"},{n:"entryAmount",t:"double"},{n:"exitAmount",t:"double"}],r:"void"},
        "UpdateDcasLotExitAmount": {d:"Anlık tüketim lot çıkış miktarı güncellenir.",p:[{n:"workstationId",t:"int"},{n:"stockLotId",t:"int"},{n:"joborderId",t:"int"},{n:"stockId",t:"int"},{n:"itemNo",t:"int"},{n:"amount",t:"double"}],r:"void"},
        "UpdatePreDefinedPlanLotsReceiptId": {d:"Üretim plan lot kayıtlarının ön tanımlı üretim fiş referansı güncellenir.",p:[{n:"workstationId",t:"int"},{n:"receiptId",t:"int"},{n:"joborderId",t:"int"}],r:"bool"},
        "UpdateStockLot": {d:"Lot tanımı güncellenir.",p:[{n:"stockLot",t:"StockLot"}],r:"void"},
        "UpdateStockLotStockId": {d:"Lot tanımında yer alan bağlı stok referansı güncellenir.",p:[{n:"stockLotId",t:"int"},{n:"stockId",t:"int"}],r:"void"},
        "UpdateDcasLotsJoborderId": {d:"İş istasyonundaki mevcut lot kaydının iş emri güncellenir",p:[{n:"workstationId",t:"int"},{n:"jobOrderId",t:"int"}],r:"void"},
        "UpdatePlanLotsJoborderId": {d:"Plan Lot tablosunda verilen refaransın iş emri bilgisi güncellenir",p:[{n:"receiptId",t:"int"},{n:"jobOrderId",t:"int"}],r:"void"}
    },
    "ILotViewService": {
        "HandleMaterialButtonInteraction": {d:"trex Edge Hammadde İşlemleri butonu ile etkileşime geçildiğinde gerçekleşen operasyonlara yönelik işlemler yapılır.",p:[],r:"void"}
    },
    "IMaintenanceExtensionService": {
        "CompleteMaintenanceOrder": {d:"İlgili iş istasyonu üzerinde aktif bir bakım iş emri mevcut ise bakım iş emrinin kapatılma operasyonları gerçekleştirilir.",p:[{n:"workstationId",t:"int"}],r:"void"},
        "CreateMaintenanceOrder": {d:"Bakım iş emri oluşturulur.",p:[{n:"maintenanceOrder",t:"MaintenanceOrder"}],r:"bool"},
        "GetActiveMaintenanceOrdersByEquipmentId": {d:"Ekipman referansına göre aktif bakım iş emri koleksiyonu dönülür.",p:[{n:"equipmentId",t:"int"}],r:"IEnumerable<MaintenanceOrderEntity>"},
        "GetEmployeeEntriesByMaintenanceOrderId": {d:"Bakım iş emri personel kayıtları dönülür.",p:[{n:"maintenanceOrderId",t:"int"}],r:"IEnumerable<MaintenanceOrderEmployeeEntryEntity>"},
        "GetMaintenanceDirectionById": {d:"Bakım talimat tanımı dönülür.",p:[{n:"directionId",t:"int"}],r:"MaintenanceDirectionEntity"},
        "GetMaintenanceDirections": {d:"İş istasyonu ile ilişkilendirilmiş bakım talimat tanımları dönülür.",p:[{n:"workstationId",t:"int"}],r:"IEnumerable<MaintenanceDirectionEntity>"},
        "GetMaintenanceOrderById": {d:"Bakım iş emri dönülür.",p:[{n:"orderId",t:"int"}],r:"MaintenanceOrder"},
        "GetMaintenancePlanById": {d:"Bakım planı dönülür.",p:[{n:"maintenancePlanId",t:"int"}],r:"MaintenancePlanEntity"},
        "GetMaintenanceServiceItems": {d:"Bakım servis stok sarf koleksiyonunu döner.",p:[{n:"serviceId",t:"int"}],r:"IEnumerable<MaintenanceServiceItemEntity>"},
        "GetMaintenanceStocks": {d:"Bakım sarf stok tanım koleksiyonunu döner.",p:[],r:"IEnumerable<MaintenanceStockView>"},
        "GetMaintenanceTypeById": {d:"Bakım tip tanımını döner.",p:[{n:"maintenanceTypeId",t:"int"}],r:"MaintenanceTypeInfo"},
        "GetMaintenanceUnitByEquipmentId": {d:"Ekipmanı temsil eden bakım ünite tanımı dönülür.",p:[{n:"equipmentId",t:"int"}],r:"MaintenanceUnitEntity"},
        "GetMaintenanceUnitByUnitId": {d:"Bakım ünite tanımı dönülür.",p:[{n:"unitId",t:"int"}],r:"MaintenanceUnitEntity"},
        "GetMaintenanceUnitByWorkStationId": {d:"İş istasyonunu temsil eden bakım ünite tanımı dönülür.",p:[{n:"workstationId",t:"int"}],r:"MaintenanceUnitEntity"},
        "GetMaintenanceUnitsByWorkStationId": {d:"İş istasyonu ile ilişkilendirilmiş bakım ünite tanımları dönülür.",p:[{n:"workStationId",t:"int"}],r:"IEnumerable<MaintenanceUnitEntity>"},
        "GetMalfunctionCauseById": {d:"Bakım arıza sebebi tanımı dönülür.",p:[{n:"malfunctionCauseId",t:"int"}],r:"MalfunctionCauseEntity"},
        "GetMalfunctionCausesByWorkStationId": {d:"İş istasyonu ile ilişkili bakım arıza sebep tanımları dönülür.",p:[{n:"workStationId",t:"int"}],r:"IEnumerable<MalfunctionCauseEntity>"},
        "SetMaintenancePlanConfiguration": {d:"Bakım plan konfigürasyonu gerçekleştirilir.",p:[{n:"workstationId",t:"int"}],r:"void"},
        "SetMaintenanceServiceItems": {d:"Bakım servis sarf stok bilgisini oluşturur.",p:[{n:"serviceId",t:"int"},{n:"serviceItems",t:"IEnumerable<MaintenanceServiceItemEntity>"}],r:"bool"},
        "SetMaintenanceTypeDefinitions": {d:"Bakım tip konfigürasyonunu oluşturur veya günceller.",p:[],r:"void"},
        "UpdateMaintenanceOrderDirectionId": {d:"Bakım iş emri talimat referansı güncellenir.",p:[{n:"maintenanceOrderId",t:"int"},{n:"maintenanceDirectionId",t:"int"}],r:"bool"},
        "UpdateMaintenanceOrderMalfunctionCauseId": {d:"Bakım iş emri arıza tipi referansı güncellenir.",p:[{n:"maintenanceOrderId",t:"int"},{n:"malfunctionCauseId",t:"int"}],r:"bool"},
        "UpdateMaintenanceOrderPlanId": {d:"Bakım iş emri bakım plan referansı güncellenir.",p:[{n:"maintenanceOrderId",t:"int"},{n:"maintenancePlanId",t:"int"}],r:"bool"},
        "UpdateMaintenanceOrderUnitId": {d:"Bakım iş emri bakım ünite referansı güncellenir.",p:[{n:"maintenanceOrderId",t:"int"},{n:"maintenanceUnitId",t:"int"}],r:"bool"}
    },
    "IMaintenanceViewService": {
        "CheckPeriodicalMaintenance": {d:"İlgili iş istasyonu için periyodik bakım zaman kontrolü ve ilgili işlemler gerçekleştirilir.",p:[{n:"workstationId",t:"int"}],r:"void"},
        "GetEmployeeStoppageMaintenanceRoleApproval": {d:"Duruş sebebinin bakım tipi mevcut ise personel validasyonu gerçekleştilir.",p:[{n:"workstationId",t:"int"},{n:"stoppageCauseId",t:"int"}],r:"EmployeeApprovalResult"},
        "HandleMaintenanceButtonInteraction": {d:"trex Edge Bakım butonu ile etkileşime geçildiğinde gerçekleşen operasyonlara yönelik işlemler yapılır.",p:[],r:"void"},
        "HandleCompleteMaintenanceButtonInteraction": {d:"trex Edge Bakım Bitir butonu ile etkileşime geçildiğinde gerçekleşen operasyonlara yönelik işlemler yapılır.",p:[],r:"void"},
        "SetEmployeeForMaintenanceStoppageIfAuthorized": {d:"Duruş sebebinin bakım tipi mevcut ise personel validasyonu ile müdahale eden bakımcı kaydı oluşturulur.",p:[{n:"workstationId",t:"int"},{n:"stoppageCauseId",t:"int"}],r:"EmployeeApprovalResult"},
        "ShowMaintenanceDirectionPictures": {d:"İlgili bakım talimat resimleri gösterilir.",p:[{n:"maintenanceDirectionId",t:"int"}],r:"bool"},
        "ShowMaintenanceDirectionVideos": {d:"İlgili bakım talimat videoları gösterilir.",p:[{n:"maintenanceDirectionId",t:"int"}],r:"bool"},
        "ShowMaintenanceDirectionSteps": {d:"İlgili bakım talimat adımları gösterilir.",p:[{n:"maintenanceDirectionId",t:"int"}],r:"bool"}
    },
    "INgpPanelPortExtensionService": {
        "MultiSerialPortBarcode": {d:"Barkod seri port listesi dönülür, ek konfigürasyonlar gerçekleştirmek için kullanılabilir.",p:[],r:"List<SerialPort>"},
        "GetSelectableOpcProcessDataDefinitions": {d:"Process data tanımları seçilebilir koleksiyon olarak dönülür.",p:[{n:"workstationId",t:"int"}],r:"IEnumerable<SelectableProcessDataDefinitionView>"}
    },
    "INgpPanelPortViewService": {
        "GetSpecPort": {d:"Birden fazla sayaç portu olması durumunda sayaç portu seçimi gerçekleştirilir.",p:[{n:"workstationId",t:"int"}],r:"SpecPort"}
    },
    "INgpPanelExtensionService": {
        "NgpPanel": {d:"Mevcut çalışan ngp panel verisine ulaşım sağlanır.",p:[],r:"NgpPanelModel"}
    },
    "IOperationExtensionService": {
        "GetOperationById": {d:"Operasyon tanımı dönülür.",p:[{n:"operationId",t:"int"}],r:"Operation"}
    },
    "IParameterExtensionService": {
        "GetSystemConfiguration": {d:"Aktif sistem konfigürasyonu dönülür.",p:[],r:"SystemParameterConfiguration"},
        "GetNgpConfiguration": {d:"Aktif panel konfigürasyonu dönülür.",p:[],r:"NgpParameterConfigurationEntity"}
    },
    "IPokaYokeViewService": {
        "ProcessPokaYokeResult": {d:"Poka yoke kontrol sonuçları işlenir.",p:[{n:"workstationId",t:"int"},{n:"planId",t:"int"}],r:"void"}
    },
    "IPolyvalenceExtensionService": {
        "IsEmployeeQualifiedForProductionPlan": {d:"Operatörün üretim planına bağlı stoklar bazında yetkinliğine sahip olup olmadığı bilgisi dönülür.",p:[{n:"employeeId",t:"int"},{n:"planId",t:"int"},{n:"workstationId",t:"int"}],r:"bool"},
        "IsEmployeeQualifiedForStock": {d:"Operatörün ilgili stok bazında yetkinliğine sahip olup olmadığı bilgisi dönülür.",p:[{n:"employeeId",t:"int"},{n:"stockId",t:"int"},{n:"workstationId",t:"int"}],r:"bool"},
        "IsEmployeeQualifiedForStoppageCause": {d:"Operatörün ilgili duruş tanımı bazında yetkinliğine sahip olup olmadığı bilgisi dönülür.",p:[{n:"employeeId",t:"int"},{n:"stoppageCauseId",t:"int"}],r:"bool"},
        "IsEmployeeQualifiedForWorkStation": {d:"Operatörün ilgili iş istasyonunda çalışmak için gereken yetkinliğine sahip olup olmadığı bilgisi dönülür.",p:[{n:"employeeId",t:"int"},{n:"workstationId",t:"int"}],r:"bool"},
        "IsTeamQualifiedForProductionPlan": {d:"Takım üyelerinden herhangi birinin üretim planına bağlı stoklar bazında yetkinliğine sahip olup olmadığı bilgisi dönülür.",p:[{n:"teamId",t:"int"},{n:"planId",t:"int"},{n:"workstationId",t:"int"}],r:"bool"},
        "IsTeamQualifiedForStock": {d:"Takım üyelerinden herhangi birinin ilgili stok bazında yetkinliğine sahip olup olmadığı bilgisi dönülür.",p:[{n:"teamId",t:"int"},{n:"stockId",t:"int"},{n:"workstationId",t:"int"}],r:"bool"},
        "IsTeamQualifiedForStoppageCause": {d:"Takım üyelerinden herhangi birinin ilgili duruş tanımı bazında yetkinliğine sahip olup olmadığı bilgisi dönülür.",p:[{n:"teamId",t:"int"},{n:"stoppageCauseId",t:"int"}],r:"bool"},
        "IsTeamQualifiedForWorkStation": {d:"Takım üyelerinden herhangi birinin ilgili iş istasyonunda çalışmak için gereken yetkinliğine sahip olup olmadığı bilgisi dönülür.",p:[{n:"teamId",t:"int"},{n:"workstationId",t:"int"}],r:"bool"}
    },
    "IProcessDataExtensionService": {
        "SetPlcOnProductionStart": {d:"İlgili konfigürasyon mevcut ise socket üzerinden plc değişken set etme işlemi gerçekleştirilir.",p:[{n:"workstationId",t:"int"}],r:"void"},
        "SetPlcOnProductionEnd": {d:"İlgili konfigürasyon mevcut ise socket üzerinden plc değişken set etme işlemi gerçekleştirilir.",p:[{n:"workstationId",t:"int"}],r:"void"},
        "SetPlcOnStoppageStart": {d:"İlgili konfigürasyon mevcut ise socket üzerinden plc değişken set etme işlemi gerçekleştirilir.",p:[{n:"workstationId",t:"int"},{n:"stoppageCauseId",t:"int"}],r:"void"},
        "SetPlcOnStoppageEnd": {d:"İlgili konfigürasyon mevcut ise socket üzerinden plc değişken set etme işlemi gerçekleştirilir.",p:[{n:"workstationId",t:"int"},{n:"stoppageCauseId",t:"int"}],r:"void"},
        "ResetProcessData": {d:"İlgili konfigürasyon mevcut ise bellekte tutulan ProcessDataAnalysis verisini sıfırlar(MaxValue = 0, MinValue = 0, ExpectedValue = 0, IsHaveSpec = false).",p:[{n:"workstationId",t:"int"},{n:"tagDescription",t:"string"}],r:"void"},
        "SetMinMaxExpectedValue": {d:"İlgili konfigürasyon mevcut ise bellekte tutulan ProcessDataAnalysis verisini günceller(MaxValue, MinValue, ExpectedValue, IsHaveSpec = true).",p:[{n:"workstationId",t:"int"},{n:"tagDescription",t:"string"},{n:"min",t:"double"},{n:"max",t:"double"},{n:"expected",t:"double"}],r:"void"}
    },
    "IProcycleExtensionService": {
        "CreateProductionSectionEntry": {d:"Anlık üretim kesiti oluşturulur.",p:[{n:"workstationId",t:"int"},{n:"insertDate",t:"DateTime"},{n:"eventType",t:"ProcycleEventType"}],r:"void"},
        "GetDefinableUndefinedStoppages": {d:"Filtre parametrelerine göre tanımsız veya tanımlanabilir gerçekleşen duruş kesitleri dönülür.",p:[{n:"workstationId",t:"int"},{n:"type",t:"UndefinedStoppageFilterType"},{n:"isSHowAllStationList",t:"bool"},{n:"isShowAllStoppages",t:"bool"},{n:"definableSignalStoppageIds",t:"string"}],r:"IEnumerable<ProcycleStoppageEntryView>"},
        "GenerateProcycleDefectEntry": {d:"İlgili iş istasyonunun anlık durumuna göre ıskarta model oluşturma işlemi yapılır.",p:[{n:"workstationId",t:"int"}],r:"ProcycleDefectEntry"},
        "GenerateProcycleEntry": {d:"İlgili iş istasyonunun anlık durumuna göre model oluşturma işlemi yapılır.",p:[{n:"workstationId",t:"int"}],r:"ProcycleEntryEntity"},
        "CreateProcycleDefectEntry": {d:"Hata girişi için üretim kesiti oluşturulur.",p:[{n:"errorEntry",t:"DefectEntryEntity"},{n:"procycleEntry",t:"ProcycleDefectEntry"}],r:"void"},
        "GetLastPlanIdExceptCurrentPlan": {d:"Mevcut çalışılan plan haricinde en son çalışılan üretim plan referansı dönülür.",p:[{n:"workstationId",t:"int"},{n:"currentPlanId",t:"int"}],r:"int"},
        "GetProcycleEntriesByWorkstationAndStock": {d:"İstasyon, stok, başlangıç tarihi ve bitiş tarihine göre kesitler dönülür.",p:[{n:"workstationId",t:"int"},{n:"stockId",t:"int"},{n:"startDate",t:"DateTime"},{n:"endDate",t:"DateTime"}],r:"IEnumerable<ProcycleEntryEntity>"}
    },
    "IProductionPerformanceExtensionService": {
        "GetProductionPerformance": {d:"Çağrıldığında üretim performansını çıktı verir. ``` double GetProductionPerformance(int workStationId, int planId, DateTime productionStartTime, DateTime productionEndTime); ```",p:[],r:"void"}
    },
    "IProductionPlanExtensionService": {
        "AddNextProductionPlan": {d:"Sıradaki çalışılacak üretim planlarına ekleme yapılır, plan sıra numarası dönülür.",p:[{n:"workStationId",t:"int"},{n:"planId",t:"int"}],r:"int"},
        "AddPlanUseStock": {d:"Plan sarf stok kaydı oluşturulur.",p:[{n:"planUseStock",t:"PlanUseStockEntity"}],r:"void"},
        "CreateProductionPlan": {d:"Üretim planı oluşturulur.",p:[{n:"plan",t:"ProductionPlanEntity"}],r:"bool"},
        "CreateProductionPlanFromJoborder": {d:"İş emri modeli üzerinden yeni bir üretim planı oluşturulur.",p:[{n:"workstationId",t:"int"},{n:"joborder",t:"JobOrderView"}],r:"int"},
        "CreateProductionPlanFromJoborders": {d:"İş emri modelleri üzerinden yeni bir üretim planı oluşturulur.",p:[{n:"workstationId",t:"int"},{n:"joborders",t:"IEnumerable<JobOrderView>"}],r:"int"},
        "CreateProductionPlanItem": {d:"Üretim plan detayı oluşturulur.",p:[{n:"planItem",t:"ProductionPlanItemEntity"}],r:"bool"},
        "DeleteNextProductionPlan": {d:"İlgili referansa ait üretim planı sıradaki iş listesinden silinir.",p:[{n:"workstationId",t:"int"},{n:"planId",t:"int"}],r:"void"},
        "GetFirstProductionPlanByStockIdExceptCurrentPlan": {d:"Stok referansına göre iş istasyonu için yüklenebilecek iş planları içerisinde ilk sıradakini getirir.",p:[{n:"workstationId",t:"int"},{n:"stockId",t:"int"}],r:"LoadableProductionPlanView"},
        "GetJobOrderIdsByPlanId": {d:"Üretim planına bağlı iş emri referans listesi dönülür.",p:[{n:"planId",t:"int"}],r:"IEnumerable<int>"},
        "GetJobOrderPokaYokeDefinitionsByPlanId": {d:"Üretim planına bağlı iş emirleri için poka yoke tanımlamaları dönülür.",p:[{n:"planId",t:"int"}],r:"IEnumerable<JobOrderPokaYokeEntity>"},
        "GetNextProductionPlanModelByPlanId": {d:"Parametre ile gönderilen üretim plan referansından sonra sıralamada bulunan üretim planına ait planlar dönülür.",p:[{n:"workStationId",t:"int"},{n:"planId",t:"int"}],r:"NextProductionPlanModel"},
        "GetNextProductionPlans": {d:"Sıradaki çalışılacak üretim planları dönülür.",p:[{n:"workStationId",t:"int"}],r:"List<NextProductionPlanEntity>"},
        "GetPlanCountByJoborderId": {d:"Gönderilen iş emri referansını içeren üretim planı sayısını döner.",p:[{n:"jobOrderId",t:"int"}],r:"int"},
        "GetProductionPlanById": {d:"Üretim planlarını ProductionPlan nesnesi olarak Id'lerine göre döner",p:[{n:"planId",t:"int"}],r:"ProductionPlan"},
        "GetProductionPlanEquipmentId": {d:"Üretim planında kullanılması öngörülen ekipman referansını döner.",p:[{n:"planId",t:"int"}],r:"int"},
        "GetProductionPlanEquipment": {d:"Üretim planında kullanılması öngörülen ekipmanı döner.",p:[{n:"planId",t:"int"}],r:"Equipment"},
        "GetRequiredEmployeeByPlanId": {d:"Üretim planının çalışılması için gereken minimum operatör sayısını döner.",p:[{n:"planId",t:"int"}],r:"int"},
        "IsPlanCapacityConvenient": {d:"Kapasite validasyonunun aktif olduğu durumda öngörülen plan kapasitesinin kabul edilebilir sınırlar içerisinde olup olmadığı bilgisi dönülür.",p:[{n:"workstationId",t:"int"},{n:"planId",t:"int"},{n:"additionalCoefficient",t:"double"}],r:"bool"},
        "IsProductionPlanActive": {d:"Üretim planının aktiflik kontrolü yapılır.",p:[{n:"planId",t:"int"}],r:"bool"},
        "IsProductionPlanExistent": {d:"Üretim planının varlık kontrolü yapılır.",p:[{n:"planId",t:"int"}],r:"bool"},
        "SetProductionInformation": {d:"Üretim planına ve anlık üretime ait veriler tekrar konfigüre edilir.",p:[{n:"workstationId",t:"int"},{n:"planId",t:"int"},{n:"isToResetProductionStartTime",t:"bool"},{n:"isToResetEquipment",t:"bool"},{n:"productionStartTime",t:"DateTime?"}],r:"bool"},
        "SetProductionInformationForAllStations": {d:"Üretim planına ve anlık üretime ait veriler tüm iş istasyonları için tekrar konfigüre edilir.",p:[],r:"void"},
        "SetProductionPlanStatus": {d:"Üretim planının durumu güncellenir.",p:[{n:"planId",t:"int"},{n:"workstationId",t:"int"},{n:"status",t:"StatusType"}],r:"void"},
        "SetWorkEndDateByPlanId": {d:"Üretim planının iş bitiş tarihi güncellenir.",p:[{n:"planId",t:"int"},{n:"workstationId",t:"int"},{n:"workEndDate",t:"DateTime"}],r:"void"},
        "SetWorkStartDateByPlanId": {d:"Üretim planının iş başlangıç tarihi güncellenir.",p:[{n:"planId",t:"int"},{n:"workstationId",t:"int"},{n:"workStartDate",t:"DateTime"}],r:"void"},
        "UpdatePlanCapacityAndSpeed": {d:"Üretim planının  kapasite ve hız değerleri güncellenir.",p:[{n:"planId",t:"int"},{n:"capacity",t:"double"},{n:"speed",t:"double"}],r:"void"},
        "UpdatePlanCyclePeriod": {d:"Üretim planının çevrim süre değeri güncellenir.",p:[{n:"planId",t:"int"},{n:"cyclePeriod",t:"double"}],r:"void"},
        "UpdatePlanItemCoefficient": {d:"Üretim plan detayındaki üretim katsayı değeri güncellenir.",p:[{n:"planId",t:"int"},{n:"jobOrderId",t:"int"},{n:"stockId",t:"int"},{n:"cycleOfCoe",t:"double"}],r:"void"},
        "UpdatePlanItemCyclePeriod": {d:"Üretim plan detayındaki çevrim süre değeri güncellenir.",p:[{n:"planId",t:"int"},{n:"joborderId",t:"int"},{n:"cyclePeriod",t:"double"}],r:"void"},
        "UpdatePlanUseStock": {d:"Referansa göre planda kullanılan stokların iş planı bilgisi ve iş emri numarası güncellenir.",p:[{n:"planId",t:"int"},{n:"jobOrderId",t:"int"},{n:"receiptId",t:"int"}],r:"void"},
        "UpdateProductionPlanEquipmentId": {d:"Üretim planına bağlı ekipman referansı güncellenir.",p:[{n:"planId",t:"int"},{n:"equipmentId",t:"int"}],r:"void"},
        "UpdateProductionPlanNote": {d:"Üretim plan notu güncellenir.",p:[{n:"planId",t:"int"},{n:"note",t:"string"}],r:"void"}
    },
    "IProductionPlanViewService": {
        "HandlePlanInformationButtonInteraction": {d:"trex Edge İş Bilgisi butonu ile etkileşime geçildiğinde gerçekleşen operasyonlara yönelik işlemler yapılır.",p:[],r:"void"},
        "HandleNextPlanSelectionButtonInteraction": {d:"trex Edge Sıradaki İş Seçim butonu ile etkileşime geçildiğinde gerçekleşen operasyonlara yönelik işlemler yapılır.",p:[],r:"void"},
        "HandleChangeStockUnitCoeButtonInteraction": {d:"trex Edge Miktar Değişimi butonu ile etkileşime geçildiğinde gerçekleşen operasyonlara yönelik işlemler yapılır.",p:[],r:"void"},
        "HandleProductionParametersButtonInteraction": {d:"trex Edge İş Parametreleri butonu ile etkileşime geçildiğinde gerçekleşen operasyonlara yönelik işlemler yapılır.",p:[],r:"void"},
        "SelectNextProductionPlans": {d:"Sonraki plan seçim ekranı gösterilir.",p:[{n:"workstationId",t:"int"}],r:"void"},
        "ShowPlanSelection": {d:"Üretim planı seçim ekranı gösterilir.",p:[{n:"showEmptyList",t:"bool"},{n:"buttonCaption",t:"string"},{n:"showAllWorkcenterOrders",t:"bool"},{n:"isJobChange",t:"bool"},{n:"isNextPlanSelection",t:"bool"}],r:"FormResponse<int>"}
    },
    "IProductionReceiptExtensionService": {
        "CreateInterSectionReceipt": {d:"Üretim ara kesit fişi oluşturulur.",p:[{n:"pidSectionReceiptEntry",t:"SectionReceiptBase"}],r:"int"},
        "CreatePidReceipt": {d:"Ön tanımlı üretim fişi oluşturulur.",p:[{n:"entry",t:"PidReceiptEntity"}],r:"bool"},
        "CreatePidReceiptMaterialReceipts": {d:"Ön tanımlı üretim fiş sarf kayıtları oluşturulur.",p:[{n:"workstationId",t:"int"},{n:"entryList",t:"IEnumerable<PidReceiptMaterialEntity>"},{n:"subEntryList",t:"IEnumerable<PidReceiptSubMaterialEntity>"}],r:"void"},
        "CreatePidReceiptSubProductReceipt": {d:"Ön tanımlı üretim fiş yan ürün kaydı oluşturulur.",p:[{n:"entry",t:"PidReceiptSubProductEntity"}],r:"bool"},
        "CreateProductionReceipt": {d:"Ön tanımlı üretim fiş referansı üzerinden üretim fişi oluşturulur.",p:[{n:"workstationId",t:"int"},{n:"planId",t:"int"},{n:"pidReceiptId",t:"int"},{n:"ifProductionContinues",t:"bool"}],r:"ProductionReceipt"},
        "CreateReceiptProductionDefect": {d:"Üretim fiş ıskarta kaydı oluşturulur.",p:[{n:"defectEntry",t:"DefectEntryEntity"}],r:"bool"},
        "CreateSectionReceipt": {d:"Üretim kesit fişi oluşturulur.",p:[{n:"pidSectionReceiptEntry",t:"SectionReceiptBase"},{n:"sectionReceiptIndex",t:"int"}],r:"int"},
        "DeleteReceiptProductionDefect": {d:"Üretim fiş ıskarta kaydı silinir.",p:[{n:"receiptId",t:"int"},{n:"id",t:"int"}],r:"bool"},
        "GetConsumptionSummaryByPidReceiptId": {d:"Ön tanımlı fiş referansına bağlı tüketim model koleksiyonu dönülür.",p:[{n:"receiptId",t:"int"}],r:"IEnumerable<Consumption>"},
        "GetInterSectionReceiptEntryByReceiptId": {d:"Üretim ara kesit fiş kaydı dönülür.",p:[{n:"receiptId",t:"int"}],r:"SectionReceiptBase"},
        "GetNextProductionReceiptId": {d:"İlgili iş istasyonu için kaydedilen parametre ile gönderilen üretim fiş referansından bir sonraki fişin referansı dönülür.",p:[{n:"workstationId",t:"int"},{n:"receiptId",t:"int"}],r:"int"},
        "GetLastPidReceiptPlanIdsExceptCurrentPlanId": {d:"İlgili iş istasyonu için argümanda yer alan üretim plan referansı hariç olmak üzere belirtilen referans adedi kadar son referans verisi dönülür.",p:[{n:"workstationId",t:"int"},{n:"planId",t:"int"},{n:"planIdCount",t:"int"}],r:"IEnumerable<int>"},
        "GetLastProductionReceiptIdByWorkStationId": {d:"İş istasyonunda son kaydedilen üretim fiş referansı dönülür.",p:[{n:"workstationId",t:"int"}],r:"int"},
        "GetPidReceiptEntryById": {d:"Ön tanımlı üretim fişini döner.",p:[{n:"pidreceiptId",t:"int"}],r:"PidReceiptEntity"},
        "GetPidReceiptIdByProductionReceiptId": {d:"Üretim fiş referansına bağlı ön tanımlı fiş referansı dönülür.",p:[{n:"productionReceiptId",t:"int"}],r:"int"},
        "GetPlanStockProduction": {d:"İlgili iş istasyonu, stok indisi ve miktar tipi için üretim miktarı dönülür.",p:[{n:"workstationId",t:"int"},{n:"stockIndex",t:"int"},{n:"quantityUnitType",t:"int"}],r:"double"},
        "GetPreviousProductionReceiptId": {d:"İlgili iş istasyonu için kaydedilen parametre ile gönderilen üretim fiş referansından bir önceki fişin referansı dönülür.",p:[{n:"workstationId",t:"int"},{n:"receiptId",t:"int"}],r:"int"},
        "GetProductionDefectAmountByPlanId": {d:"Üretim planı için girilmiş olan toplam ıskarta miktarlarını döner.",p:[{n:"planId",t:"int"},{n:"workstationId",t:"int"}],r:"QuantityResult"},
        "GetProductionDefectSummaryByPlanId": {d:"Üretim planı bazında toplam üretim fiş ıskarta miktarları dönülür.",p:[{n:"planId",t:"int"}],r:"QuantityResult"},
        "GetProductionReceiptBrief": {d:"İlgili argümanlar bazında üretim / üretim fiş özet verisi dönülür.",p:[{n:"planId",t:"int"},{n:"stockId",t:"int"},{n:"masterStationIdList",t:"string"}],r:"ProductionReceiptBrief"},
        "GetProductionReceiptById": {d:"Referans bazında üretim fiş verisi dönülür.",p:[{n:"receiptId",t:"int"}],r:"ProductionReceipt"},
        "GetProductionReceiptByNo": {d:"Numara bazında üretim fiş verisi dönülür.",p:[{n:"receiptNo",t:"string"}],r:"ProductionReceipt"},
        "GetProductionSubReceiptBriefByPlanId": {d:"Üretim planı bazında yan ürün üretim fiş özeti dönülür.",p:[{n:"planId",t:"int"}],r:"ProductionReceiptBrief"},
        "GetSectionReceiptEntryByReceiptId": {d:"Üretim kesit fişi dönülür.",p:[{n:"receiptId",t:"int"}],r:"SectionReceiptBase"},
        "GetUnapprovedReceiptBriefByPlanId": {d:"Üretim planı bazında onaylanmamış ön tanımlı fiş özeti  dönülür.",p:[{n:"planId",t:"int"}],r:"ProductionReceiptBrief"},
        "IsProductionReceiptExistent": {d:"Üretim fiş referansı bazlı varlık kontrolü yapılır.",p:[{n:"receiptNo",t:"string"}],r:"bool"},
        "SetProductionAmountByPlanId": {d:"Plan üretim miktarları güncellenir.",p:[{n:"planId",t:"int"},{n:"workstationId",t:"int"}],r:"void"},
        "SetReceiptLabelPrintCount": {d:"Üretim fişi için etiket yazdırılma sayısı set edilir.",p:[{n:"receiptId",t:"int"},{n:"printCount",t:"int"}],r:"void"},
        "UpdateReceiptProductionDefect": {d:"Üretim fişine bağlı ıskarta kaydı güncellenir.",p:[{n:"defectEntry",t:"DefectEntryEntity"}],r:"bool"},
        "UpdateProductionReceiptQuantityByReceiptId": {d:"Üretim fiş referansı bazlı üretim miktarları güncellenir.",p:[{n:"receiptId",t:"int"},{n:"quantity",t:"double"},{n:"quantity2",t:"double"},{n:"quantity3",t:"double"},{n:"editUserId",t:"int"},{n:"editDate",t:"DateTime"}],r:"bool"},
        "UpdateProductionReceiptQuantityByReceiptNo": {d:"Üretim fiş numarası bazlı üretim miktarları güncellenir.",p:[{n:"receiptNo",t:"string"},{n:"quantity",t:"double"},{n:"quantity2",t:"double"},{n:"quantity3",t:"double"},{n:"editUserId",t:"int"},{n:"editDate",t:"DateTime"}],r:"bool"},
        "UpdateProductionReceiptUpSysStatus": {d:"Üretim fişinin üst sistem gönderim durumu güncellenir.",p:[{n:"receiptId",t:"int"},{n:"upSysStatus",t:"int"},{n:"upSysStatusDescription",t:"string"}],r:"bool"}
    },
    "IProductionReceiptViewService": {
        "AnyProductionReceiptIntegrating": {d:"Arka planda o an herhangi bir üretim fiş entegrasyon operasyonunun yapılıp yapılmadığı bilgisi dönülür.",p:[],r:"bool"},
        "CreateProductionReceipt": {d:"Ön tanımlı üretim fişi ve ardından nihai üretim fişi kayıtları oluşturulur.",p:[{n:"workstationId",t:"int"},{n:"isApprovedProduction",t:"bool"},{n:"isPlanToBeClosed",t:"bool"},{n:"isPlanToBeContinued",t:"bool"},{n:"isLabelToBePrinted",t:"bool"},{n:"productionSaveSourceType",t:"ProductionSaveSourceType"}],r:"void"},
        "GetMaterialDefectViewModelsByProductionReceiptId": {d:"Üretim fişine bağlı hammadde ıskarta kayıtları dönülür.",p:[{n:"workstationId",t:"int"},{n:"productionReceiptId",t:"int"}],r:"List<ProductionReceiptMaterialDefectViewModel>"},
        "GetProductionDefectViewModelsByProductionReceiptId": {d:"Üretim fişine bağlı üretim ıskarta kayıtları dönülür.",p:[{n:"workstationId",t:"int"},{n:"productionReceiptId",t:"int"}],r:"List<ProductionReceiptDefectViewModel>"},
        "HandleEditProductionReceiptButtonInteraction": {d:"trex Edge Üretim Fiş Düzenle butonu ile etkileşime geçildiğinde gerçekleşen operasyonlara yönelik işlemler yapılır.",p:[],r:"void"},
        "HandleUnapprovedReceiptsButtonInteraction": {d:"trex Edge Onaysız Üretim Fişleri butonu ile etkileşime geçildiğinde gerçekleşen operasyonlara yönelik işlemler yapılır.",p:[],r:"void"},
        "HandleUnintegratedReceiptsButtonInteraction": {d:"trex Edge Üst Sisteme Gönderilmeyen Üretim Fişleri butonu ile etkileşime geçildiğinde gerçekleşen operasyonlara yönelik işlemler yapılır.",p:[],r:"void"},
        "IntegrateAllUnIntegratedProductionReceipts": {d:"Entegre edilmemiş son 1 güne ait tüm üretim fişleri için entegrasyon operasyonu başlatılır.",p:[{n:"workstationId",t:"int"}],r:"void"},
        "IntegrateProductionReceipt": {d:"İlgili üretim fişi için entegrasyon operasyonu başlatılır.",p:[{n:"workstationId",t:"int"},{n:"receipt",t:"ProductionReceipt"},{n:"productionSaveSourceType",t:"ProductionSaveSourceType"}],r:"void"},
        "ShowProductionReceiptId": {d:"Son kaydedilen üretim fiş referansı / referansları gösterilir.",p:[{n:"workstationId",t:"int"}],r:"void"}
    },
    "IProductionExtensionService": {
        "EndProduction": {d:"Üretim kaydı gerçekleştilir ve iş bitir operasyonu gerçekleştirilir.",p:[{n:"workstationId",t:"int"},{n:"isPrintingLabelEnabled",t:"bool"},{n:"quantity",t:"double"},{n:"referenceQuantityType",t:"int"}],r:"void"},
        "GetNextProductionPlanId": {d:"İş istasyonu üretimi için sıralanmış bir sonraki üretim planının referansı dönülür.",p:[{n:"workstationId",t:"int"},{n:"jobLoadSourceType",t:"PlanLoadActionType"}],r:"int"},
        "IncreaseCounterByStockIndex": {d:"Stok indis bazlı sayaç artışı gerçekleştirilir.",p:[{n:"workstationId",t:"int"},{n:"stockIndex",t:"int"},{n:"increment",t:"double"}],r:"void"},
        "IncreaseCounterByStockNo": {d:"Stok kodu bazlı sayaç artışı gerçekleştirilir, katsayı gönderilmediği durumda 1 adet artış sağlanır.",p:[{n:"workstationId",t:"int"},{n:"stockNo",t:"string"},{n:"increment",t:"double"}],r:"bool"},
        "IsPlanStartAllowed": {d:"Üretim planının yüklenme öncesi kontrolleri yapılıp yüklemeye uygun olup olmadığı sonucu dönülür.",p:[{n:"workstationId",t:"int"},{n:"planId",t:"int"},{n:"jobLoadSourceType",t:"PlanLoadActionType"}],r:"bool"},
        "IsProductionSaveAllowed": {d:"İlgili iş istasyonu için üretim kayıt işleminin uygunluk kontrolü gerçekleştirilir.",p:[{n:"workstationId",t:"int"}],r:"Response<string>"},
        "IsProductionSaving": {d:"İlgili iş istasyonu için o an herhangi bir kaynaktan üretim kaydı gerçekleşmekte olup olmadığı bilgisi dönülür.",p:[{n:"workstationId",t:"int"}],r:"bool"},
        "LoadPlanStartProduction": {d:"Üretim planı yüklenip iş başlatma kurguları gerçekleştirilir.",p:[{n:"workstationId",t:"int"},{n:"planId",t:"int"},{n:"type",t:"PlanLoadSourceType"}],r:"bool"},
        "LoadProductionPlanByJobOrderId": {d:"Sistemde eğer iş istasyonu üzerinde yüklü olan üretim planı dışında ilgili iş emri referansına sahip farklı bir plan bulunuyor ise, bulunan üretim planı yüklenir. İş istasyonu üzerinde o an bir üretim planı yüklü ise otomatik üretim kaydı ile mevcut üretim sonlandırılır.",p:[{n:"workstationId",t:"int"},{n:"joborderId",t:"int"}],r:"bool"},
        "LoadProductionPlanByStockId": {d:"Sistemde eğer iş istasyonu üzerinde yüklü olan üretim planı dışında ilgili stok referansını üretim için bir plan bulunuyor ise, bulunan üretim planı yüklenir. İş istasyonu üzerinde o an bir üretim planı yüklü ise otomatik üretim kaydı ile mevcut üretim sonlandırılır.",p:[{n:"workstationId",t:"int"},{n:"stockId",t:"int"},{n:"type",t:"PlanLoadSourceType"}],r:"bool"},
        "SaveInterSection": {d:"Ara kesit fiş kaydı oluşturulur.",p:[{n:"workstationId",t:"int"},{n:"defectId",t:"int"},{n:"quantity",t:"double"},{n:"quantity2",t:"double"},{n:"quantity3",t:"double"},{n:"quantityUnitType",t:"int"},{n:"stockIndex",t:"int"}],r:"string"},
        "SaveProduction": {d:"Üretim kaydı gerçekleştilir ve üretime devam edilir.",p:[{n:"workstationId",t:"int"},{n:"isPrintingLabelEnabled",t:"bool"},{n:"quantity",t:"double"},{n:"referenceQuantityType",t:"int"}],r:"bool"},
        "SaveProductionByStockIndex": {d:"Stok indis bazlı üretim kayıt işlemi gerçekleştirilir ve üretime devam edilir.",p:[{n:"workstationId",t:"int"},{n:"stockIndex",t:"ref int"}],r:"bool"},
        "SetPlanDetails": {d:"Üretim plan detayları set edilir.",p:[{n:"workstationId",t:"int"},{n:"actionType",t:"PlanLoadActionType"},{n:"startSetupStoppage",t:"bool"}],r:"void"},
        "SetProductionSummary": {d:"İş istasyonunda çalışan üretim planına ait son durum veri tabanından güncellenir.",p:[{n:"workstationId",t:"int"}],r:"void"}
    },
    "IProductionViewService": {
        "ChangePlanStartProduction": {d:"Mevcut üretim planı için son üretim kayıt zamanından metodun çağrım anına kadar olan üretim için geçmişe yönelik üretim plan değişikliği yapılır ve yeni üretim planı yüklenir.",p:[{n:"workstationId",t:"int"},{n:"planId",t:"int"},{n:"isApprovalRequired",t:"bool"}],r:"bool"},
        "CheckIfPlanCompleted": {d:"Üretim planının tamamlanıp tamamlanmadığı kontrol edilir ve buna bağlı kurgular gerçekleştirilir.",p:[{n:"workstationId",t:"int"}],r:"void"},
        "CheckIfShiftChangeTimeHasCome": {d:"Vardiya değişim zamanının gelip gelmediği kontrol edilir ve geldi ise vardiya değişim işlemleri gerçekleştirilir.",p:[{n:"workstationId",t:"int"}],r:"void"},
        "CheckNgpCommands": {d:"trex Edge uygulamasına gönderilebilecek dış komutlar kontrol edilir ve mevcut ise komutlar işlenir.",p:[{n:"workstationId",t:"int"}],r:"void"},
        "CheckReceivedMessages": {d:"trex Edge uygulamasına gönderilebilecek mesajlar kontrol edilir ve mevcut ise gösterim işlemi yapılır.",p:[],r:"void"},
        "GenerateProductionStockViewModels": {d:"Mevcut çalışan üretim stoklarına ait güncel durumu içeren view mmodel koleksiyonu dönülür.",p:[{n:"workstationId",t:"int"}],r:"List<ProductionStockViewModel>"},
        "GetExpectedFinishTimeValueText": {d:"İlgili iş istasyonu için o an yüklü olan işin tahmini bitiş süresini(tarihini) döner.",p:[{n:"workstationId",t:"int"}],r:"string"},
        "HandleCurrentPlanChangeButtonInteraction": {d:"trex Edge İş Değiştir - Yanlış İş Yükledim butonu ile etkileşime geçildiğinde gerçekleşen operasyonlara yönelik işlemler yapılır.",p:[],r:"void"},
        "HandleOtherOperationsButtonInteraction": {d:"trex Edge Diğer İşlemler butonu ile etkileşime geçildiğinde gerçekleşen operasyonlara yönelik işlemler yapılır.",p:[],r:"void"},
        "HandleProductionButtonInteraction": {d:"trex Edge İş Yükle - İş Bitir butonu ile etkileşime geçildiğinde gerçekleşen operasyonlara yönelik işlemler yapılır.",p:[],r:"void"}
    },
    "IProductionSpecificationService": {
        "AnyUnSatisfiedRequirementExists": {d:"Üretim spesifikasyon sonuçlarında tamamlanmamış herhangi bir zorunlu alanın mevcut olup olmadığı bilgisi dönülür.",p:[{n:"workstationId",t:"int"},{n:"planId",t:"int"},{n:"openingType",t:"ProductionSpecificationShowTimeType"}],r:"bool"},
        "GetExpectedDoubleValueByName": {d:"Beklenen sayısal yönerge değeri dönülür.",p:[{n:"workStationId",t:"int"},{n:"specificationName",t:"string"},{n:"jobOrderId",t:"int"}],r:"double"},
        "GetExpectedTextValueByName": {d:"Beklenen metinsel yönerge değeri dönülür.",p:[{n:"workStationId",t:"int"},{n:"specificationName",t:"string"},{n:"jobOrderId",t:"int"}],r:"string"},
        "GetProductionSpecificationResultsByGroupItemNo": {d:"Grup numarasına göre üretim spesifikasyon sonucu dönülür.",p:[{n:"pidReceiptId",t:"int"},{n:"groupItemNo",t:"int"}],r:"IEnumerable<ProductionSpecificationResultEntity>"},
        "GetProductionSpecificationInstructions": {d:"İş istasyonu, plan ve gösterim tipi bazlı üretim spesifikasyon yönergelerini döner.",p:[{n:"workstationId",t:"int"},{n:"planId",t:"int"},{n:"specShowType",t:"ProductionSpecificationShowTimeType"}],r:"IEnumerable<ProductionSpecificationInstructionEntity>"},
        "GetProductionSpecificationResults": {d:"Üretim spesifikasyon sonucu mevcut ise güncellenir, aksi durumda oluşturulur.",p:[{n:"pidReceiptId",t:"int"}],r:"IEnumerable<ProductionSpecificationResultEntity>"},
        "GetSpecificationNameByInstructionId": {d:"Yönerge referansı bazlı spesifikasyon ismi dönülür.",p:[{n:"instructionId",t:"int"}],r:"string"},
        "GetSpecificationTextValuesByName": {d:"Spesifikasyonun tanımlı olduğu yönergeler için varsayılan metin değer koleksiyonu dönülür.",p:[{n:"specName",t:"string"},{n:"joborderIds",t:"string"},{n:"workStationId",t:"int"}],r:"IEnumerable<string>"},
        "SetProductionSpecificationResults": {d:"",p:[{n:"pidReceiptId",t:"int"},{n:"deviceId",t:"int"},{n:"teamId",t:"int"},{n:"specResultList",t:"IEnumerable<ProductionSpecificationResultEntity>"},{n:"planId",t:"int"},{n:"listItemNo",t:"int"},{n:"groupItemNo",t:"int"}],r:"bool"},
        "GetMaxMinExpectedValueByWorkstationIdAndSpecName": {d:"İş istasyonu, iş emri ve spesifikasyon adı veya iş emri ve spesifikasyon adı bazlı üretim spesifikasyon yönergesini döner.",p:[{n:"workStationId",t:"int"},{n:"jobOrderId",t:"int"},{n:"selectedDataName",t:"string"}],r:"ProductionSpecificationInstructionEntity"}
    },
    "IProductionSpecificationViewService": {
        "HandleProductionSpecButtonInteraction": {d:"trex Edge Üretim Spesifikasyonları - Operasyon Parametreleri butonu ile etkileşime geçildiğinde gerçekleşen operasyonlara yönelik işlemler yapılır.",p:[],r:"void"},
        "ShowSpecificationGroupSelection": {d:"Spesifikasyon grup seçim ekranı gösterilir.",p:[{n:"groupCodeList",t:"List<string>"}],r:"string"},
        "ShowProductionSpecForm": {d:"Üretim spesifikasyon yönergeleri gösterilir.",p:[{n:"showTimeType",t:"ProductionSpecificationShowTimeType"}],r:"bool"}
    },
    "IProductTreeExtensionService": {
        "GetProductAssemblyOrders": {d:"Ürün ağacına bağlı montaj iş emirleri dönülür.",p:[{n:"operationId",t:"int"},{n:"stockId",t:"int"}],r:"List<ProductTreeAssemblyOrderEntity>"},
        "CreateAssemblyHistoryEntry": {d:"Montaj üretim kaydı eklenir.",p:[{n:"entity",t:"ProductTreeAssemblyHistoryEntity"}],r:"bool"}
    },
    "IQualityExtensionService": {
        "CreateUserDefinedQualityReceipt": {d:"Kalite kontrol fişi oluşturulur.",p:[{n:"workstationId",t:"int"},{n:"controlType",t:"int"}],r:"void"},
        "GetProcessQualityDefinitions": {d:"Kademeli sorgulama yapılarak ilk eşleşen kalite kontrol adım tanımları dönülür. Öncelikle iş emrine göre sorgulama yapılır, eşleşme olmaz ise iş istasyonu ve stok bazlı sorgulama yapılır, yine eşleşme olmadığı durumda stok bazlı sorgulama yapılır ve halen bir eşleşme sağlanamadı ise son olarak operasyon bazlı sorgulama yapılır.",p:[{n:"workstationId",t:"int"},{n:"controlType",t:"int"},{n:"jobOrderId",t:"int"},{n:"stockId",t:"int"},{n:"operationId",t:"int"}],r:"Response<List<ProcessQualityDefinition>>"}
    },
    "IQualityViewService": {
        "HandleQualityControlButtonInteraction": {d:"trex Edge Kalite Kontrol butonu ile etkileşime geçildiğinde gerçekleşen operasyonlara yönelik işlemler yapılır.",p:[],r:"void"}
    },
    "ISerieReworkExtensionService": {
        "CreateSerieReworkEntry": {d:"Seri rework kaydı oluşturulur.",p:[{n:"entity",t:"SerieReworkEntity"}],r:"bool"},
        "CreateSerieReworkEntryDetail": {d:"Seri rework detay kaydı oluşturulur.",p:[{n:"entity",t:"SerieReworkDetailEntity"}],r:"bool"},
        "GetSerieReworkEntryBySerieId": {d:"Seri bazlı rework kaydı dönülür.",p:[{n:"serieId",t:"int"}],r:"SerieReworkEntity"},
        "GetSerieReworkEntryDetailsBySerieId": {d:"Seri bazında rework detay kayıtları dönülür.",p:[{n:"serieId",t:"int"}],r:"IEnumerable<SerieReworkDetailEntity>"},
        "GetSerieReworkViewBySerieId": {d:"Seri bazlı rework kaydına ait view model dönülür.",p:[{n:"serieId",t:"int"}],r:"SerieReworkView"},
        "UpdateSerieReworkEntry": {d:"Seri rework kaydı güncellenir.",p:[{n:"entity",t:"SerieReworkEntity"}],r:"bool"},
        "UpdateSerieReworkEntryDetail": {d:"Seri rework detay kaydı güncellenir.",p:[{n:"entity",t:"SerieReworkDetailEntity"}],r:"bool"}
    },
    "IShiftEventExtensionService": {
        "CreateShiftEvent": {d:"Vardiya olay kaydı oluşturulur.",p:[{n:"shiftEvent",t:"ShiftEvent"}],r:"bool"},
        "GetShiftEvents": {d:"Vardiya olay kayıtları dönülür.",p:[{n:"workstationId",t:"int"},{n:"startTime",t:"DateTime"},{n:"endTime",t:"DateTime"}],r:"IEnumerable<ShiftEvent>"},
        "GetShiftEventTypes": {d:"Vardiya olay tipleri dönülür.",p:[{n:"workstationId",t:"int"}],r:"IEnumerable<ShiftEventTypeEntity>"}
    },
    "IShiftExtensionService": {
        "CalculateShiftProductivity": {d:"İlgili iş istasyonu için vardiya verimliliği analiz sonuçlarına göre hesaplanır.",p:[{n:"workstationId",t:"int"}],r:"void"},
        "SetShiftTimeSchedules": {d:"İlgili iş istasyonu için vardiya konfigürasyonu gerçekleştirilir.",p:[{n:"workstationId",t:"int"}],r:"void"}
    },
    "ISignalProcessExtensionService": {
        "IncreaseCounterBySignalPort": {d:"Sinyal portu bazlı sayaç artışı gerçekleştirilir.",p:[{n:"signalPort",t:"SignalPort"},{n:"increment",t:"double"}],r:"void"},
        "StartUndefinedStoppage": {d:"Tanımsız duruş başlatma işlemi gerçekleştirilir.",p:[{n:"workstationId",t:"int"},{n:"sourceType",t:"StoppageSourceType"}],r:"void"},
        "StartStoppageIfAnyStoppageSignalActive": {d:"Aktif duruş sinyali mevcut ise ilgili duruş başlatılır.",p:[{n:"workstationId",t:"int"}],r:"bool"}
    },
	"ISqlDataContext": {
		"GetDataTable": {d:"Query parametresi ile verilen sql panel tarafında çalıştırılır ve sonucu döndürülür.", p:[{n:"query",t:"string"}],r:"list<dynamic>"},
		"RunCommand": {d:"Query parametresi ile verilen sql panel tarafında çalıştırılır. Başarılı ise sonuç true döner", p:[{n:"query",t:"string"}],r:"bool"}		
	},
    "IStockCycleExtensionService": {
        "GetPlanCapacity": {d:"Üretim planı kapasite değeri dönülür.",p:[{n:"workstationId",t:"int"},{n:"planId",t:"int"}],r:"double"},
        "GetPlanCyclePeriod": {d:"Üretim planı çevrim süre değeri dönülür.",p:[{n:"planId",t:"int"}],r:"double"},
        "GetPlanStockCoefficient": {d:"Üretim planındaki ilgili stok referansının üretim çarpanı dönülür.",p:[{n:"planId",t:"int"},{n:"stockId",t:"int"}],r:"double"},
        "GetWorkStationPlanCycle": {d:"Üretim planı için iş istasyonu bazında tanımlı çevrim bilgisi dönülür.",p:[{n:"workstationId",t:"int"},{n:"planId",t:"int"}],r:"StationPlanCycleEntity"},
        "GetWorkStationStockCycle": {d:"İş istasyonu ve stok bazında tanımlı çevrim bilgisi dönülür.",p:[{n:"workstationId",t:"int"},{n:"stockId",t:"int"}],r:"StationStockCycleEntity"},
        "IsWorkStationPlanCycleExistent": {d:"Üretim planı için iş istasyonu bazında çevrim tanımının varlık kontrolü yapılır.",p:[{n:"workstationId",t:"int"},{n:"planId",t:"int"}],r:"bool"},
        "IsWorkStationStockCycleExistent": {d:"İş istasyonu ve stok bazında çevrim tanımının varlık kontrolü yapılır.",p:[{n:"workstationId",t:"int"},{n:"stockId",t:"int"}],r:"bool"},
        "SetCyclePeriod": {d:"Çevrim süre değerinin hesaplama işlemi gerçekleştirilir.",p:[{n:"workstationId",t:"int"}],r:"void"},
        "SetProPlanCycleFromStockCycle": {d:"İş istasyonu ve stok bazında çevrim tanımından Üretim planı için iş istasyonu bazında çevrim tanımı oluşturulur.",p:[{n:"workstationId",t:"int"},{n:"planId",t:"int"}],r:"void"},
        "SetWorkStationPlanCycle": {d:"Üretim planı için iş istasyonu bazında çevrim tanımı oluşturulur veya güncellenir.",p:[{n:"stationPlanCycle",t:"StationPlanCycleEntity"}],r:"bool"},
        "UpdateProPlanCycleCapacity": {d:"Üretim planı için iş istasyonu bazında çevrim tanımının kapasite değeri güncellenir.",p:[{n:"workstationId",t:"int"},{n:"planId",t:"int"},{n:"capacity",t:"double"}],r:"void"},
        "UpdateProPlanCycleCoefficient": {d:"Üretim planı için iş istasyonu bazında çevrim tanımının üretim çarpan değeri güncellenir.",p:[{n:"workstationId",t:"int"},{n:"planId",t:"int"},{n:"cycleOfCoe",t:"double"}],r:"void"},
        "UpdateProPlanCyclePeriod": {d:"Üretim planı için iş istasyonu bazında çevrim tanımının çevrim süre değeri güncellenir.",p:[{n:"workstationId",t:"int"},{n:"planId",t:"int"},{n:"cyclePeriod",t:"double"}],r:"void"}
    },
    "IStockExtensionService": {
        "CreateStock": {d:"Stok tanımı oluşturulur.",p:[{n:"stockNo",t:"string"},{n:"stockName",t:"string"},{n:"IsLotTraceable",t:"bool"}],r:"int"},
        "GetAlternateStockViewsByStockId": {d:"Stok referansı bazında alternatif stok koleksiyonu dönülür.",p:[{n:"stockId",t:"int"}],r:"IEnumerable<StockAlternateView>"},
        "GetStockByCustomerStockNo": {d:"Müşteri stok numarasına göre stok tanımı dönülür.",p:[{n:"customerStockNo",t:"string"}],r:"Stock"},
        "GetStockById": {d:"Stok referansına göre stok tanımı dönülür.",p:[{n:"stockId",t:"int"}],r:"Stock"},
        "GetStockByNo": {d:"Stok numarasına göre stok tanımı dönülür.",p:[{n:"stockNo",t:"string"}],r:"Stock"},
        "GetStockBySupplierStockNo": {d:"Tedarikçi stok numarasına göre stok tanımı dönülür.",p:[{n:"supplierStockNo",t:"string"}],r:"Stock"},
        "GetStockByCaseSensitiveNo": {d:"büyük küçük harf duyarsız olarak Stok numarasına göre stok tanımı dönülür.",p:[{n:"stockNo",t:"string"}],r:"Stock"},
        "GetStockGradeById": {d:"Nitelik referans bazlı stok nitelik tanımı dönülür.",p:[{n:"gradeId",t:"int"}],r:"StockGradeEntity"},
        "GetStockUnitName": {d:"Birim referansı bazlı stok birim ismi dönülür.",p:[{n:"unitId",t:"int"}],r:"string"},
        "GetStockUnitsByStockId": {d:"Stok referansı bazlı stok birimleri dönülür.",p:[{n:"stockId",t:"int"}],r:"List<StockUnit>"},
        "GetUnitByUnitId": {d:"Birim tanımı dönülür.",p:[{n:"unitId",t:"int"}],r:"Unit"},
        "IsAlternateStock": {d:"Parametre ile gönderilen stoklar arasında alternatiflik kontrolü yapılır, entegrasyon durumuna göre dış sistemden veya veri tabanından kontrol gerçekleştirilir.",p:[{n:"referenceStockNo",t:"string"},{n:"alternateStockNo",t:"string"},{n:"joborderNo",t:"string"}],r:"AlternateStockSummary"},
        "IsStockExistent": {d:"Referans bazlı stok tanımının varlık kontrolü gerçekleştirilir.",p:[{n:"stockId",t:"int"}],r:"bool"}
    },
    "IStockViewService": {
        "GetStockIndexSelection": {d:"Yüklü stoklar arasından indis seçimi gerçekleştirilir.",p:[],r:"int"}
    },
    "IStoppageExtensionService": {
        "EndStoppageDueToSystemInteraction": {d:"Sistem tarafından duruşu bitirecek bir etkileşim gerçekleştirildiğinde ilgili kontroller ve duruş işlemleri gerçekleştirilir.",p:[{n:"workstationId",t:"int"}],r:"void"},
        "GetEstimatedStoppageDuration": {d:"Duruş için tanımlı öngörülen süre saniye cinsinden dönülür.",p:[{n:"workstationId",t:"int"},{n:"stockId",t:"int"},{n:"stopcauseId",t:"int"}],r:"int"},
        "GetSelectableStoppageCauses": {d:"Parametrelere bağlı olarak operatör tarafından seçilebilecek duruş tanımları dönülür.",p:[{n:"workstationId",t:"int"},{n:"planId",t:"int"},{n:"isTestModeActive",t:"bool"},{n:"isToChangeUndefinedStoppage",t:"bool"}],r:"IEnumerable<StoppageCauseEntity>"},
        "GetStoppageCauseById": {d:"Referans bazlı duruş tanımı dönülür.",p:[{n:"stopcauseId",t:"int"}],r:"StoppageCause"},
        "GetStoppageCauseDetails": {d:"Duruş tanımlarının iş istasyon spesifikasyonları dönülür.",p:[{n:"workstationId",t:"int"}],r:"IEnumerable<StoppageCauseStationDetailEntity>"},
        "GetStoppageCauseIdByNo": {d:"Duruş kodu üzerinden duruş referansı dönülür.",p:[{n:"stopcauseNo",t:"string"}],r:"int"},
        "GetStoppageCauses": {d:"İlgili dil kodu bazında tercüme edilmiş şekilde aktif duruş tanımları dönülür.",p:[{n:"languageId",t:"int"}],r:"IEnumerable<StoppageCause>"},
        "GetStoppageCauseDefectId": {d:"Duruş tanımına bağlı olarak duruş süresinde gelen sayaç bilgisinin otomatik aktarılacağı ıskarda referansı dönülür.",p:[{n:"workstationId",t:"int"},{n:"stopcauseId",t:"int"}],r:"int"},
        "GetStoppageCauseStationDetail": {d:"Duruş tanımının iş istasyon spesifikasyonu dönülür.",p:[{n:"workstationId",t:"int"},{n:"stopcauseId",t:"int"}],r:"StoppageCauseStationDetailEntity"},
        "GetStoppageCauseStockDetail": {d:"Duruş tanımının stok spesifikasyonu dönülür.",p:[{n:"workstationId",t:"int"},{n:"stockId",t:"int"},{n:"stopcauseId",t:"int"}],r:"StoppageCauseStockDetailEntity"},
        "IsStoppageCausePlanned": {d:"Duruş tanımının planlı duruş niteliğine sahip olup olmadığı bilgisi dönülür.",p:[{n:"stopcauseId",t:"int"}],r:"bool"},
        "IsStoppageCauseSystemStoppage": {d:"Duruş tanımının bir sistem duruşu olup olmadığı bilgisi dönülür.",p:[{n:"stopcauseId",t:"int"}],r:"bool"},
        "IsCurrentStoppageNoShiftStoppage": {d:"İş istasyonunun o an sistem tanımlı vardiya yok duruşunda olup olmadığı bilgisi dönülür.",p:[{n:"workstationId",t:"int"}],r:"bool"},
        "SetWorkStationStatus": {d:"İş istasyonu için duruş başlatma, değiştirme ve bitirme işlemleri gerçekleştirilir.",p:[{n:"workstationId",t:"int"},{n:"stoppageCauseId",t:"int"},{n:"stoppageSourceType",t:"StoppageSourceType"},{n:"isToChangeStoppage",t:"bool"},{n:"statusEventTime",t:"DateTime"},{n:"stopDesciption",t:"string"},{n:"stopDetail",t:"string"}],r:"void"},
        "SetStoppageCauseDefinitionDetails": {d:"Duruş tanımına ait alt spesifikasyonlar oluşturulur veya güncellenir.",p:[{n:"workstationId",t:"int"}],r:"void"},
        "SetStoppageCauseDefinitions": {d:"Duruş tanımına ait spesifikasyonlar oluşturulur veya güncellenir.",p:[{n:"languageId",t:"int"}],r:"void"}
    },
    "IStoppageViewService": {
        "ChangeDefinedStoppages": {d:"Tanımlı duruşlar arasından tekrar tanımlanabilmek üzere konfigüre edilmiş duruşların değiştirilebilmesi için UI işlemleri gerçekleştirilir.",p:[{n:"ActivityType",t:"TrexActivityType"}],r:"bool"},
        "DefineUndefinedStoppages": {d:"Tanımsız duruşların tanımlanabilmesi için UI işlemleri gerçekleştirilir.",p:[{n:"ActivityType",t:"TrexActivityType"}],r:"bool"},
        "EndStoppageDueToOperatorInteraction": {d:"Operatör tarafından duruş bitiş işlemi tetiklendiğinde gereken kontrol ve operasyonlar gerçekleştirilir.",p:[{n:"workstationId",t:"int"}],r:"void"},
        "HandleStoppageButtonInteraction": {d:"trex Edge Duruş Tanımla - Duruş Bitir butonu ile etkileşime geçildiğinde gerçekleşen operasyonlara yönelik işlemler yapılır.",p:[],r:"void"},
        "HandleStoppageChangeButtonInteraction": {d:"trex Edge Duruş Değiştir butonu ile etkileşime geçildiğinde gerçekleşen operasyonlara yönelik işlemler yapılır.",p:[],r:"void"},
        "HandleTestModeButtonInteraction": {d:"trex Edge Test Modu butonu ile etkileşime geçildiğinde gerçekleşen operasyonlara yönelik işlemler yapılır.",p:[],r:"void"}
    },
    "IWorkStationExtensionService": {
        "GetWorkCenterById": {d:"Referans bazlı iş merkezi verisi dönülür.",p:[{n:"workcenterId",t:"int"}],r:"WorkCenterEntity"},
        "GetWorkCenterByWorkStationId": {d:"İş istasyonunun ait olduğu iş merkezi verisi dönülür.",p:[{n:"workstationId",t:"int"}],r:"WorkCenterEntity"},
        "GetWorkStationById": {d:"Referans bazlı iş istasyon verisi dönülür.",p:[{n:"workstationId",t:"int"}],r:"WorkStationEntity"},
        "GetWorkStations": {d:"Sistemdeki aktif iş istasyon tanımları dönülür.",p:[],r:"IEnumerable<WorkStationEntity>"},
        "GetWorkStationsByWorkcenterId": {d:"İş merkezi altında tanımlı iş istasyon tanımları dönülür.",p:[{n:"workcenterId",t:"int"}],r:"IEnumerable<WorkStationEntity>"},
        "UpdateStationEquipment": {d:"İş istasyon tanımına bağlı ekipman referansı güncellenir.",p:[{n:"workstationId",t:"int"},{n:"equipmentId",t:"int"}],r:"void"}
    },
    "IWorkStationStatusExtensionService": {
        "GetInputCounterStatusEntries": {d:"Veri tabanına kayıtlı son input sayaç durum bilgileri dönülür.",p:[{n:"workstationId",t:"int"}],r:"IEnumerable<InputCountStatusEntity>"},
        "GetMaterialItemStatusEntries": {d:"Veri tabanına kayıtlı son tüketim alt sayaç durum bilgileri dönülür.",p:[{n:"workstationId",t:"int"},{n:"planId",t:"int"},{n:"stockId",t:"int"}],r:"IEnumerable<WorkStationMaterialItemStatusEntity>"},
        "GetMaterialStatusEntries": {d:"Veri tabanına kayıtlı son tüketim sayaç durum bilgileri dönülür.",p:[{n:"workstationId",t:"int"},{n:"planId",t:"int"}],r:"IEnumerable<WorkStationMaterialStatusEntity>"},
        "GetStationStatusSummary": {d:"İş istasyon durum özeti dönülür.",p:[{n:"workstationId",t:"int"}],r:"StationStatusSummary"},
        "SetStationStatusSummary": {d:"Anlık olarak ilgili iş emrini çalışan iş istasyonlarına ait view model koleksiyonu dönülür.",p:[{n:"joborderId",t:"int"}],r:"IEnumerable<PanelStationStatusView>"},
        "GetWorkStationEnergyStatusEntries": {d:"Veri tabanına kayıtlı son enerji sayaç durum bilgileri dönülür.",p:[{n:"workstationId",t:"int"}],r:"IEnumerable<WorkStationEnergyStatusEntity>"},
        "GetWorkStationOtherStatusEntry": {d:"Veri tabanına kayıtlı son istasyon ek durum detay bilgisi dönülür.",p:[{n:"workstationId",t:"int"}],r:"WorkStationOtherStatusEntry"},
        "GetWorkStationStatus": {d:"Veri tabanına kayıtlı son istasyon durum bilgisi dönülür.",p:[{n:"workstationId",t:"int"}],r:"WorkStationStatusEntity"},
        "GetWorkStationStatusEntryViewModel": {d:"Veri tabanına kayıtlı son istasyon durum bilgisine ait view model dönülür.",p:[{n:"workstationId",t:"int"}],r:"WorkStationStatusEntryView"},
        "GetWorkStationStatusItemEntries": {d:"Veri tabanına kayıtlı son istasyon - stok durum bilgileri dönülür.",p:[{n:"workstationId",t:"int"},{n:"planId",t:"int"}],r:"IEnumerable<WorkStationStatusItemEntity>"},
        "IfPlanIsWorkingAtAnotherStation": {d:"Üretim planının o an farklı bir iş istasyonunda çalışıp çalışmadığı bilgisi dönülür.",p:[{n:"workstationId",t:"int"},{n:"planId",t:"int"}],r:"Response<string>"}
    },
    "IWorkStationStatusViewService": {
        "GetProducibleQuantityText": {d:"Anlık üretim için üretilebilecek miktarı birim adı ile metin olarak döner.",p:[{n:"workstationId",t:"int"}],r:"string"}
    }
};
