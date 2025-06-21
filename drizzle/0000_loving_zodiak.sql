CREATE TABLE `flight` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`uuid` text NOT NULL,
	`date` text NOT NULL,
	`origin` text NOT NULL,
	`destination` text NOT NULL,
	`airline` text NOT NULL,
	`time` text NOT NULL,
	`duration` text NOT NULL,
	`flight_type` text NOT NULL,
	`price_inr` integer NOT NULL,
	`origin_country` text NOT NULL,
	`destination_country` text NOT NULL,
	`rain_probability` text NOT NULL,
	`free_meal` integer DEFAULT false NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `flight_uuid_unique` ON `flight` (`uuid`);