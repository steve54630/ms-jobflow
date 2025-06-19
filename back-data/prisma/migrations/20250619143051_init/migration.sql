-- CreateTable
CREATE TABLE `Profile` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `picture` TEXT NULL,
    `firstname` VARCHAR(100) NULL,
    `lastname` VARCHAR(100) NULL,
    `email` VARCHAR(255) NULL,
    `phone` VARCHAR(14) NULL,
    `location` VARCHAR(255) NULL,
    `has_car` BOOLEAN NOT NULL,
    `description` TEXT NULL,
    `member_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Profile_member_id_key`(`member_id`),
    INDEX `Profile_member_id_idx`(`member_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Job_offer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `ftid` VARCHAR(10) NOT NULL,
    `location` VARCHAR(100) NULL,
    `contract_type` VARCHAR(45) NULL,
    `experience_length` VARCHAR(100) NULL,
    `professional_field` VARCHAR(100) NULL,
    `work_time` VARCHAR(100) NULL,
    `salary` VARCHAR(100) NULL,
    `handy_friendly` BOOLEAN NULL,
    `description` TEXT NOT NULL,
    `update_ft` DATETIME(3) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Job_offer_ftid_key`(`ftid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Job_search` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(100) NOT NULL,
    `search_field` VARCHAR(100) NOT NULL,
    `city` VARCHAR(45) NULL,
    `departement` VARCHAR(3) NULL,
    `contract_type` VARCHAR(45) NULL,
    `experience` VARCHAR(100) NULL,
    `professional_field` VARCHAR(45) NULL,
    `work_time` VARCHAR(45) NULL,
    `salary` VARCHAR(45) NULL,
    `handy_friendly` BOOLEAN NULL,
    `member_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `Job_search_member_id_idx`(`member_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Event` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(100) NOT NULL,
    `start_date` DATETIME(3) NOT NULL,
    `end_date` DATETIME(3) NULL,
    `description` TEXT NULL,
    `location` VARCHAR(50) NULL,
    `member_id` INTEGER NOT NULL,
    `job_offer_id` INTEGER NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `Event_member_id_idx`(`member_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Experience` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(100) NOT NULL,
    `start_date` DATE NOT NULL,
    `end_date` DATE NULL,
    `company_name` VARCHAR(100) NOT NULL,
    `location` VARCHAR(50) NOT NULL,
    `description` TEXT NULL,
    `member_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `Experience_member_id_idx`(`member_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Education` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(100) NOT NULL,
    `start_date` DATE NOT NULL,
    `end_date` DATE NULL,
    `is_obtained` BOOLEAN NOT NULL,
    `school_name` VARCHAR(100) NOT NULL,
    `location` VARCHAR(50) NOT NULL,
    `description` TEXT NULL,
    `member_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `Education_member_id_idx`(`member_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Skill` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `category` ENUM('hard', 'soft') NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Skill_title_key`(`title`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Mad_skill` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `category` ENUM('interest', 'hobbies') NOT NULL,
    `member_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `Mad_skill_member_id_idx`(`member_id`),
    UNIQUE INDEX `Mad_skill_member_id_title_category_key`(`member_id`, `title`, `category`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Activity` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(100) NOT NULL,
    `description` TEXT NULL,
    `start_date` DATE NOT NULL,
    `end_date` DATE NULL,
    `location` VARCHAR(50) NOT NULL,
    `member_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `Activity_member_id_idx`(`member_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Langue` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(45) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Langue_title_key`(`title`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Member_skill` (
    `member_id` INTEGER NOT NULL,
    `skill_id` INTEGER NOT NULL,

    PRIMARY KEY (`member_id`, `skill_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Member_langue` (
    `member_id` INTEGER NOT NULL,
    `langue_id` INTEGER NOT NULL,
    `level` VARCHAR(100) NULL,

    PRIMARY KEY (`member_id`, `langue_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Member_offer` (
    `member_id` INTEGER NOT NULL,
    `offer_id` INTEGER NOT NULL,

    PRIMARY KEY (`member_id`, `offer_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Member_skill` ADD CONSTRAINT `Member_skill_skill_id_fkey` FOREIGN KEY (`skill_id`) REFERENCES `Skill`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Member_langue` ADD CONSTRAINT `Member_langue_langue_id_fkey` FOREIGN KEY (`langue_id`) REFERENCES `Langue`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Member_offer` ADD CONSTRAINT `Member_offer_offer_id_fkey` FOREIGN KEY (`offer_id`) REFERENCES `Job_offer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
