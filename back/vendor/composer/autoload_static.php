<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInited41caae7afea8ee987ed5aecd5dd494
{
    public static $files = array (
        '0e6d7bf4a5811bfa5cf40c5ccd6fae6a' => __DIR__ . '/..' . '/symfony/polyfill-mbstring/bootstrap.php',
        '0d59ee240a4cd96ddbb4ff164fccea4d' => __DIR__ . '/..' . '/symfony/polyfill-php73/bootstrap.php',
        '320cde22f66dd4f5d3fd621d3e88b98f' => __DIR__ . '/..' . '/symfony/polyfill-ctype/bootstrap.php',
        '253c157292f75eb38082b5acb06f3f01' => __DIR__ . '/..' . '/nikic/fast-route/src/functions.php',
    );

    public static $prefixLengthsPsr4 = array (
        'S' => 
        array (
            'Symfony\\Polyfill\\Php73\\' => 23,
            'Symfony\\Polyfill\\Mbstring\\' => 26,
            'Symfony\\Polyfill\\Ctype\\' => 23,
            'Symfony\\Contracts\\Service\\' => 26,
            'Symfony\\Component\\Yaml\\' => 23,
            'Symfony\\Component\\Console\\' => 26,
            'Slim\\Middleware\\' => 16,
            'Slim\\' => 5,
        ),
        'P' => 
        array (
            'Psr\\Log\\' => 8,
            'Psr\\Http\\Message\\' => 17,
            'Psr\\Container\\' => 14,
        ),
        'F' => 
        array (
            'Firebase\\JWT\\' => 13,
            'FastRoute\\' => 10,
        ),
        'D' => 
        array (
            'Doctrine\\Persistence\\' => 21,
            'Doctrine\\ORM\\' => 13,
            'Doctrine\\Instantiator\\' => 22,
            'Doctrine\\DBAL\\' => 14,
            'Doctrine\\Common\\Lexer\\' => 22,
            'Doctrine\\Common\\Inflector\\' => 26,
            'Doctrine\\Common\\Collections\\' => 28,
            'Doctrine\\Common\\Cache\\' => 22,
            'Doctrine\\Common\\Annotations\\' => 28,
            'Doctrine\\Common\\' => 16,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Symfony\\Polyfill\\Php73\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/polyfill-php73',
        ),
        'Symfony\\Polyfill\\Mbstring\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/polyfill-mbstring',
        ),
        'Symfony\\Polyfill\\Ctype\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/polyfill-ctype',
        ),
        'Symfony\\Contracts\\Service\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/service-contracts',
        ),
        'Symfony\\Component\\Yaml\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/yaml',
        ),
        'Symfony\\Component\\Console\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/console',
        ),
        'Slim\\Middleware\\' => 
        array (
            0 => __DIR__ . '/..' . '/tuupola/slim-jwt-auth/src',
        ),
        'Slim\\' => 
        array (
            0 => __DIR__ . '/..' . '/slim/slim/Slim',
        ),
        'Psr\\Log\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/log/Psr/Log',
        ),
        'Psr\\Http\\Message\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/http-message/src',
        ),
        'Psr\\Container\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/container/src',
        ),
        'Firebase\\JWT\\' => 
        array (
            0 => __DIR__ . '/..' . '/firebase/php-jwt/src',
        ),
        'FastRoute\\' => 
        array (
            0 => __DIR__ . '/..' . '/nikic/fast-route/src',
        ),
        'Doctrine\\Persistence\\' => 
        array (
            0 => __DIR__ . '/..' . '/doctrine/persistence/lib/Doctrine/Persistence',
        ),
        'Doctrine\\ORM\\' => 
        array (
            0 => __DIR__ . '/..' . '/doctrine/orm/lib/Doctrine/ORM',
        ),
        'Doctrine\\Instantiator\\' => 
        array (
            0 => __DIR__ . '/..' . '/doctrine/instantiator/src/Doctrine/Instantiator',
        ),
        'Doctrine\\DBAL\\' => 
        array (
            0 => __DIR__ . '/..' . '/doctrine/dbal/lib/Doctrine/DBAL',
        ),
        'Doctrine\\Common\\Lexer\\' => 
        array (
            0 => __DIR__ . '/..' . '/doctrine/lexer/lib/Doctrine/Common/Lexer',
        ),
        'Doctrine\\Common\\Inflector\\' => 
        array (
            0 => __DIR__ . '/..' . '/doctrine/inflector/lib/Doctrine/Common/Inflector',
        ),
        'Doctrine\\Common\\Collections\\' => 
        array (
            0 => __DIR__ . '/..' . '/doctrine/collections/lib/Doctrine/Common/Collections',
        ),
        'Doctrine\\Common\\Cache\\' => 
        array (
            0 => __DIR__ . '/..' . '/doctrine/cache/lib/Doctrine/Common/Cache',
        ),
        'Doctrine\\Common\\Annotations\\' => 
        array (
            0 => __DIR__ . '/..' . '/doctrine/annotations/lib/Doctrine/Common/Annotations',
        ),
        'Doctrine\\Common\\' => 
        array (
            0 => __DIR__ . '/..' . '/doctrine/common/lib/Doctrine/Common',
            1 => __DIR__ . '/..' . '/doctrine/event-manager/lib/Doctrine/Common',
            2 => __DIR__ . '/..' . '/doctrine/persistence/lib/Doctrine/Common',
            3 => __DIR__ . '/..' . '/doctrine/reflection/lib/Doctrine/Common',
        ),
    );

    public static $prefixesPsr0 = array (
        'P' => 
        array (
            'Pimple' => 
            array (
                0 => __DIR__ . '/..' . '/pimple/pimple/src',
            ),
        ),
    );

    public static $classMap = array (
        'JsonException' => __DIR__ . '/..' . '/symfony/polyfill-php73/Resources/stubs/JsonException.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInited41caae7afea8ee987ed5aecd5dd494::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInited41caae7afea8ee987ed5aecd5dd494::$prefixDirsPsr4;
            $loader->prefixesPsr0 = ComposerStaticInited41caae7afea8ee987ed5aecd5dd494::$prefixesPsr0;
            $loader->classMap = ComposerStaticInited41caae7afea8ee987ed5aecd5dd494::$classMap;

        }, null, ClassLoader::class);
    }
}