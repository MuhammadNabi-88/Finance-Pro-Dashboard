package com.financepro;

import com.financepro.model.Transaction;
import com.financepro.repository.TransactionRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import java.math.BigDecimal;
import java.time.LocalDate;

@SpringBootApplication
public class FinanceproApplication {
    public static void main(String[] args) {
        SpringApplication.run(FinanceproApplication.class, args);
    }

    @Bean
    CommandLineRunner init(TransactionRepository repo) {
        return args -> {
            repo.save(Transaction.builder().datum(LocalDate.of(2026,11,21)).beschreibung("Gehalt - Soft Outlet Metzingen").kategorie("Gehalt").art(Transaction.Art.Einnahme).betrag(new BigDecimal("3850.00")).konto("Girokonto").build());
            repo.save(Transaction.builder().datum(LocalDate.of(2026,11,20)).beschreibung("REWE Metzingen").kategorie("Lebensmittel").art(Transaction.Art.Ausgabe).betrag(new BigDecimal("-86.45")).konto("Girokonto").build());
            repo.save(Transaction.builder().datum(LocalDate.of(2026,11,19)).beschreibung("Miete - Metzingen Mitte").kategorie("Miete").art(Transaction.Art.Ausgabe).betrag(new BigDecimal("-950.00")).konto("Girokonto").build());
        };
    }
}